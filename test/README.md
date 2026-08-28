# Checks

Not part of the site — the page itself has zero dependencies and no build step.
These need Playwright, installed anywhere convenient:

```
npm i playwright        # browsers already present? add PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
node verify.mjs      "../index.html" ./out
node subset-check.mjs "../index.html"
node font-cost.mjs   "../index.html"
```

**`verify.mjs`** — both languages: no JS errors, no untranslated keys, no empty
i18n nodes, WordArt headings carry an `aria-label`, the copy button is disabled
while there is no address, the canvas paints and exports an untainted PNG, the
almanac fills. Then: language choice survives a reload, the marquee pause works,
`prefers-reduced-motion` stops travel *without* extinguishing the sparkles, no
horizontal overflow at 1280 or 390, tap targets ≥ 40px, and the landscape still
renders with JavaScript disabled.

**`subset-check.mjs`** — the important one. Two families ship subset via `&text=`
(Ma Shan Zheng, Noto Serif SC). A character outside the subset does not error; it
silently renders in the fallback. This walks every element that resolves to one
of those families, in both languages, and fails if any character was never asked
for. **Run it after touching a plaque, a seal, the certificate crest, the 宜/忌
marks, the step numerals or the dictionary headword** — and update the `&text=`
parameter in `index.html` and the sets at the top of this script together.

**`font-cost.mjs`** — records what the page actually pulls from fonts.gstatic.com
per language. The browser fetches only the `unicode-range` subsets it needs, so a
family's published size is a ceiling and not a page cost; measure rather than
guess. Current: **813 KB zh / 499 KB en.**
