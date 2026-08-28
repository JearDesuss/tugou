import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';

// What does this page ACTUALLY pull? The browser fetches only the unicode-range
// subsets it needs, so a family's total size is a ceiling, not a page cost.
const FILE = process.argv[2];
const b = await chromium.launch();

for (const lang of ['zh', 'en']) {
  const ctx = await b.newContext({ viewport: { width: 1280, height: 900 } });
  const p = await ctx.newPage();
  const byFamily = new Map();
  p.on('response', async r => {
    const u = r.url();
    if (!u.includes('fonts.gstatic.com')) return;
    let len = Number(r.headers()['content-length'] || 0);
    if (!len) { try { len = (await r.body()).length; } catch { len = 0; } }
    // Attribute by the CSS that requested it — resolve via the font file's path
    const key = u.includes('/l/font') ? 'subset(&text=)' : u.split('/s/')[1]?.split('/')[0] || 'other';
    const cur = byFamily.get(key) || { n: 0, bytes: 0 };
    cur.n++; cur.bytes += len;
    byFamily.set(key, cur);
  });

  await p.goto(pathToFileURL(FILE).href, { waitUntil: 'networkidle' });
  await p.waitForTimeout(1200);
  if ((await p.getAttribute('html', 'data-lang')) !== lang) {
    await p.click('#langBtn');
    await p.waitForTimeout(2500);
  }
  await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await p.waitForTimeout(2500);

  let total = 0;
  console.log('\n[' + lang + ']');
  for (const [k, v] of [...byFamily].sort((a, c) => c[1].bytes - a[1].bytes)) {
    console.log('  ' + k.padEnd(18) + v.n + ' file(s)  ' + Math.round(v.bytes / 1024) + ' KB');
    total += v.bytes;
  }
  console.log('  TOTAL webfont: ' + Math.round(total / 1024) + ' KB');
  await ctx.close();
}
await b.close();
