import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const TARGET = process.argv[2] || '../index.html';
const OUT = resolve(process.argv[3] || './out/tugou');
const url = /^https?:\/\//i.test(TARGET) ? TARGET : pathToFileURL(resolve(TARGET)).href;
await mkdir(dirname(OUT), { recursive: true });

let failures = 0;
const ok = (name, condition, detail = '') => {
  if (!condition) {
    failures += 1;
    console.log(`  FAIL ${name}${detail ? ` — ${detail}` : ''}`);
  } else {
    console.log(`  pass ${name}${detail ? ` — ${detail}` : ''}`);
  }
};

const browser = await chromium.launch();

for (const lang of ['zh', 'en']) {
  console.log(`\n[${lang} / desktop 1280]`);
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  if ((await page.getAttribute('html', 'data-lang')) !== lang) {
    await page.click('#langBtn');
    await page.waitForTimeout(250);
  }

  ok('no JS errors', errors.length === 0, errors.join(' | ').slice(0, 180));
  ok('language dataset', (await page.getAttribute('html', 'data-lang')) === lang);
  ok('language attribute', (await page.getAttribute('html', 'lang')) === (lang === 'zh' ? 'zh-Hans' : 'en'));
  ok('no horizontal overflow', (await page.evaluate(() => document.documentElement.scrollWidth)) <= 1281);

  const badTranslations = await page.evaluate(() => {
    return [...document.querySelectorAll('[data-i18n]')]
      .filter(element => !element.textContent.trim() || element.textContent.trim() === element.dataset.i18n)
      .map(element => element.dataset.i18n);
  });
  ok('all copy rendered', badTranslations.length === 0, badTranslations.join(', '));

  ok('copy button disabled', await page.$eval('#copyBtn', button => button.disabled));
  const address = (await page.textContent('#contractAddr')).trim();
  ok('no fake address', address.length > 0 && !/^0x[0-9a-f]{8,}/i.test(address), address);

  ok('compressed hero image loaded', await page.$eval('.hero__media img', image => image.complete && image.naturalWidth === 840 && image.naturalHeight === 672));
  ok('almanac has three 宜', (await page.$$eval('#almYi li', nodes => nodes.length)) === 3);
  ok('almanac has three 忌', (await page.$$eval('#almJi li', nodes => nodes.length)) === 3);

  const painted = await page.evaluate(() => {
    const canvas = document.getElementById('genCanvas');
    const data = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
    const colors = new Set();
    for (let index = 0; index < data.length; index += 5000) {
      colors.add(`${data[index]},${data[index + 1]},${data[index + 2]}`);
    }
    return colors.size;
  });
  ok('card canvas painted', painted > 60, `${painted} sampled colours`);

  const pngBytes = await page.evaluate(() => new Promise(resolveBlob => {
    document.getElementById('genCanvas').toBlob(blob => resolveBlob(blob?.size || 0), 'image/png');
  }));
  ok('card exports an untainted PNG', pngBytes > 10000, `${pngBytes} bytes`);

  await page.screenshot({ path: `${OUT}-${lang}.png`, fullPage: true });
  await page.close();
}

console.log('\n[persistence]');
{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  const before = await page.getAttribute('html', 'data-lang');
  await page.click('#langBtn');
  const flipped = await page.getAttribute('html', 'data-lang');
  await page.reload({ waitUntil: 'networkidle' });
  ok('language survives reload', (await page.getAttribute('html', 'data-lang')) === flipped, `${before} → ${flipped}`);
  await context.close();
}

console.log('\n[ticker pause]');
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.click('#tickerToggle');
  ok('ticker pauses', await page.$eval('.ticker', element => element.classList.contains('is-paused')));
  ok('animation is paused', await page.$eval('.ticker__track', element => getComputedStyle(element).animationPlayState === 'paused'));
  await page.click('#tickerToggle');
  ok('ticker resumes', await page.$eval('.ticker', element => !element.classList.contains('is-paused')));
  await page.close();
}

console.log('\n[prefers-reduced-motion]');
{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  ok('hero stops travelling', await page.$eval('.hero__media img', element => getComputedStyle(element).animationName === 'none'));
  ok('ticker stops travelling', await page.$eval('.ticker__track', element => getComputedStyle(element).animationName === 'none'));
  ok('glints remain present', (await page.$$eval('.glint', nodes => nodes.length)) === 2);
  await context.close();
}

console.log('\n[mobile 390]');
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  ok('no horizontal overflow', (await page.evaluate(() => document.documentElement.scrollWidth)) <= 392);
  const smallTargets = await page.evaluate(() => {
    return [...document.querySelectorAll('button, .button, input, select')]
      .filter(element => {
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 && rect.height < 40;
      })
      .map(element => `${element.id || element.className}:${Math.round(element.getBoundingClientRect().height)}`);
  });
  ok('tap targets are at least 40px', smallTargets.length === 0, smallTargets.join(', '));
  await page.screenshot({ path: `${OUT}-mobile.png`, fullPage: true });
  await page.close();
}

console.log('\n[javascript disabled]');
{
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'load' });
  ok('Chinese hero copy remains', (await page.textContent('#heroTitle')).trim() === '土狗');
  ok('compressed hero image remains', await page.$eval('.hero__media img', image => image.complete && image.naturalWidth === 840 && image.naturalHeight === 672));
  await context.close();
}

console.log(`\n${failures === 0 ? 'ALL CHECKS PASSED' : `${failures} CHECK(S) FAILED`}`);
await browser.close();
process.exit(failures === 0 ? 0 : 1);
