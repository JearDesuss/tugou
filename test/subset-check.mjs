import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';

// Subsetting fails SILENTLY: a character outside the &text= set just renders in
// the fallback. So assert that every element resolving to a subsetted family
// contains only characters that family was actually asked for.
const SETS = {
  'Noto Serif SC': new Set('正宗土狗币宜忌一二三四0123456789'),
  'Ma Shan Zheng': new Set('土狗酷早安'),
};
const b = await chromium.launch();
let bad = 0;
for (const lang of ['zh', 'en']) {
  const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  await p.goto(pathToFileURL(process.argv[2]).href, { waitUntil: 'networkidle' });
  await p.waitForTimeout(1500);
  if ((await p.getAttribute('html', 'data-lang')) !== lang) {
    await p.click('#langBtn'); await p.waitForTimeout(1200);
  }
  const found = await p.evaluate((families) => {
    const out = [];
    document.querySelectorAll('body *').forEach(el => {
      if (!el.childNodes.length) return;
      const text = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim();
      if (!text) return;
      const fam = getComputedStyle(el).fontFamily.split(',')[0].replace(/["']/g, '').trim();
      if (families.includes(fam)) out.push({ fam, text, sel: el.className || el.tagName });
    });
    return out;
  }, Object.keys(SETS));

  for (const f of found) {
    const allowed = SETS[f.fam];
    const outside = [...f.text].filter(c => !/\s/.test(c) && !allowed.has(c));
    if (outside.length) {
      bad++;
      console.log(`  [${lang}] TOFU RISK  ${f.sel}  family="${f.fam}"  outside subset: ${outside.join('')}  (text: "${f.text}")`);
    }
  }
  console.log(`  [${lang}] checked ${found.length} element(s) on subsetted families`);
  await p.close();
}
console.log(bad === 0 ? '\nNo character falls outside its subset.' : `\n${bad} PROBLEM(S)`);
await b.close();
process.exit(bad ? 1 : 0);
