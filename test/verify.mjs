import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';

const FILE = process.argv[2];
const OUT = process.argv[3];
const url = pathToFileURL(FILE).href;
let failures = 0;
const ok = (name, cond, detail = '') => {
  if (!cond) { failures++; console.log('  FAIL ' + name + (detail ? ' — ' + detail : '')); }
  else console.log('  pass ' + name + (detail ? ' — ' + detail : ''));
};

const browser = await chromium.launch();

// ---------- 1. both languages, desktop ----------
for (const lang of ['zh', 'en']) {
  console.log('\n[' + lang + ' / desktop 1280]');
  const p = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await p.goto(url, { waitUntil: 'networkidle' });
  await p.waitForTimeout(2200);
  if ((await p.getAttribute('html', 'data-lang')) !== lang) {
    await p.click('#langBtn'); await p.waitForTimeout(900);
  }
  ok('no js errors', errs.length === 0, errs.join(' | ').slice(0, 200));
  ok('lang attr', (await p.getAttribute('html', 'data-lang')) === lang);
  ok('html lang', ['zh-Hans', 'en'].includes(await p.getAttribute('html', 'lang')));
  ok('no h-overflow', (await p.evaluate(() => document.documentElement.scrollWidth)) <= 1281);

  // every translatable node actually got text
  const empty = await p.evaluate(() => {
    const out = [];
    document.querySelectorAll('[data-i18n],[data-i18n-wordart]').forEach(el => {
      if (!el.textContent.trim()) out.push(el.dataset.i18n || el.dataset.i18nWordart);
    });
    return out;
  });
  ok('no empty i18n nodes', empty.length === 0, empty.join(','));

  // no key leaked through as its own name
  const leaked = await p.evaluate(() => {
    const out = [];
    document.querySelectorAll('[data-i18n],[data-i18n-wordart]').forEach(el => {
      const k = el.dataset.i18n || el.dataset.i18nWordart;
      if (el.textContent.trim() === k) out.push(k);
    });
    return out;
  });
  ok('no untranslated keys', leaked.length === 0, leaked.join(','));

  // WordArt headings must not be announced three times
  const triple = await p.evaluate(() =>
    [...document.querySelectorAll('.wordart')].filter(el => !el.getAttribute('aria-label')).length);
  ok('wordart has aria-label', triple === 0);

  // contract must not look copyable while there is no address
  ok('copy button disabled', await p.$eval('#copyBtn', b => b.disabled));
  const addr = (await p.$eval('#contractAddr', e => e.textContent)).trim();
  ok('no fake address', !/^0x[0-9a-f]{6,}/i.test(addr) && addr.length > 0, addr);

  // canvas actually painted something (not a blank rect)
  const painted = await p.evaluate(() => {
    const c = document.getElementById('genCanvas');
    const g = c.getContext('2d');
    const d = g.getImageData(0, 0, c.width, c.height).data;
    const seen = new Set();
    for (let i = 0; i < d.length; i += 4000) seen.add(d[i] + ',' + d[i + 1] + ',' + d[i + 2]);
    return seen.size;
  });
  ok('canvas painted', painted > 40, painted + ' distinct sampled colours');

  // the card must export
  const blob = await p.evaluate(() => new Promise(res => {
    document.getElementById('genCanvas').toBlob(b => res(b ? b.size : 0), 'image/png');
  }));
  ok('canvas exports png (not tainted)', blob > 10000, blob + ' bytes');

  // almanac filled
  ok('almanac populated', (await p.$$eval('#almYi li', n => n.length)) === 5);
  ok('almanac ji populated', (await p.$$eval('#almJi li', n => n.length)) === 5);

  await p.screenshot({ path: `${OUT}-${lang}-hero.png` });
  await p.close();
}

// ---------- 2. language choice persists ----------
console.log('\n[persistence]');
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const p = await ctx.newPage();
  await p.goto(url, { waitUntil: 'networkidle' });
  await p.waitForTimeout(1500);
  const first = await p.getAttribute('html', 'data-lang');
  await p.click('#langBtn'); await p.waitForTimeout(500);
  const flipped = await p.getAttribute('html', 'data-lang');
  await p.reload({ waitUntil: 'networkidle' });
  await p.waitForTimeout(1500);
  ok('choice survives reload', (await p.getAttribute('html', 'data-lang')) === flipped,
     first + ' -> ' + flipped);
  await ctx.close();
}

// ---------- 3. marquee pause (WCAG 2.2.2) ----------
console.log('\n[marquee pause]');
{
  const p = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await p.goto(url, { waitUntil: 'networkidle' });
  await p.waitForTimeout(1200);
  await p.click('#marqueePause'); await p.waitForTimeout(300);
  ok('pauses', await p.$eval('.marquee__track', e => e.style.animationPlayState === 'paused'));
  await p.click('#marqueePause'); await p.waitForTimeout(300);
  ok('resumes', await p.$eval('.marquee__track', e => e.style.animationPlayState === 'running'));
  await p.close();
}

// ---------- 4. reduced motion must not erase the sparkle ----------
console.log('\n[prefers-reduced-motion]');
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
  const p = await ctx.newPage();
  await p.goto(url, { waitUntil: 'networkidle' });
  await p.waitForTimeout(2000);
  const vis = await p.evaluate(() => {
    const stars = document.querySelectorAll('.hero__scene svg g[fill="#ffffff"] > path');
    let lit = 0;
    stars.forEach(s => { if (parseFloat(getComputedStyle(s).opacity) > 0.5) lit++; });
    return { total: stars.length, lit };
  });
  ok('sparkles stay visible', vis.total > 0 && vis.lit === vis.total,
     vis.lit + '/' + vis.total + ' lit');
  ok('marquee not animating', await p.$eval('.marquee__track',
     e => getComputedStyle(e).animationName === 'none'));
  await ctx.close();
}

// ---------- 5. mobile ----------
console.log('\n[mobile 390]');
{
  const p = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await p.goto(url, { waitUntil: 'networkidle' });
  await p.waitForTimeout(2000);
  ok('no h-overflow', (await p.evaluate(() => document.documentElement.scrollWidth)) <= 392);
  const small = await p.evaluate(() => {
    const bad = [];
    document.querySelectorAll('button, a.btn, select, input').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.height > 0 && r.height < 40) bad.push((el.id || el.className) + ' h=' + Math.round(r.height));
    });
    return bad;
  });
  ok('tap targets >= 40px', small.length === 0, small.join(', '));
  await p.screenshot({ path: OUT + '-mobile.png' });
  await p.close();
}

// ---------- 6. no-JS ----------
console.log('\n[javascript disabled]');
{
  const ctx = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1280, height: 900 } });
  const p = await ctx.newPage();
  await p.goto(url, { waitUntil: 'load' });
  await p.waitForTimeout(1200);
  ok('landscape still renders', (await p.$$eval('#heroScene svg path', n => n.length)) > 20);
  await p.screenshot({ path: OUT + '-nojs.png' });
  await ctx.close();
}

console.log('\n' + (failures === 0 ? 'ALL CHECKS PASSED' : failures + ' CHECK(S) FAILED'));
await browser.close();
process.exit(failures === 0 ? 0 : 1);
