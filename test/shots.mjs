import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 });
await p.goto('http://127.0.0.1:4173', { waitUntil: 'networkidle' });
await p.waitForTimeout(1200);
const dir = process.argv[2];
for (const [name, sel] of [['hero','.hero'],['definition','.definition'],['daily','.daily'],['launch','.launch'],['honest','.honest'],['footer','.footer']]) {
  const el = await p.$(sel);
  if (el) await el.screenshot({ path: `${dir}/${name}.png` });
}
await p.screenshot({ path: `${dir}/full.png`, fullPage: true });
await b.close();
console.log('shot');
