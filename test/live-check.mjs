import { chromium } from 'playwright';

const URL_ = process.argv[2];
const OUT = process.argv[3];
let bad = 0;
const ok = (n, c, d = '') => { if (!c) { bad++; console.log('  FAIL ' + n + (d ? ' — ' + d : '')); } else console.log('  pass ' + n + (d ? ' — ' + d : '')); };

const b = await chromium.launch();
for (const lang of ['zh', 'en']) {
  console.log('\n[' + lang + ' @ ' + URL_ + ']');
  const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  const errs = [], fonts = [];
  p.on('pageerror', e => errs.push(e.message));
  p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  p.on('requestfailed', r => errs.push('REQFAIL ' + r.url().slice(0, 80)));
  p.on('response', r => { if (r.url().includes('fonts.gstatic')) fonts.push(r.status()); });

  const resp = await p.goto(URL_, { waitUntil: 'networkidle' });
  ok('http 200', resp.status() === 200, String(resp.status()));
  await p.waitForTimeout(2500);
  if ((await p.getAttribute('html', 'data-lang')) !== lang) { await p.click('#langBtn'); await p.waitForTimeout(1500); }

  ok('no errors / failed requests', errs.length === 0, errs.slice(0, 3).join(' | ').slice(0, 160));
  ok('webfonts served', fonts.length > 0 && fonts.every(s => s === 200), fonts.length + ' files');
  ok('lang', (await p.getAttribute('html', 'data-lang')) === lang);

  // the real faces actually applied (not a system fallback)
  const applied = await p.evaluate(async () => {
    await document.fonts.ready;
    const loaded = [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family);
    return [...new Set(loaded)];
  });
  ok('ZCOOL KuaiLe loaded', applied.includes('ZCOOL KuaiLe'), applied.join(', '));
  ok('Noto Sans SC loaded', applied.includes('Noto Sans SC'));

  const empty = await p.evaluate(() => [...document.querySelectorAll('[data-i18n]')].filter(e => !e.textContent.trim()).length);
  ok('all strings rendered', empty === 0);

  const painted = await p.evaluate(() => {
    const c = document.getElementById('genCanvas'); const g = c.getContext('2d');
    const d = g.getImageData(0, 0, c.width, c.height).data; const s = new Set();
    for (let i = 0; i < d.length; i += 4000) s.add(d[i] + ',' + d[i + 1] + ',' + d[i + 2]);
    return s.size;
  });
  ok('card generator paints', painted > 60, painted + ' colours');
  ok('no h-overflow', (await p.evaluate(() => document.documentElement.scrollWidth)) <= 1281);

  await p.screenshot({ path: `${OUT}-${lang}.png` });
  await p.close();
}
console.log('\n' + (bad ? bad + ' FAILED' : 'LIVE SITE OK'));
await b.close();
process.exit(bad ? 1 : 0);
