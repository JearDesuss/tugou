# Optional checks

The site itself has no runtime dependencies. The checks use Playwright:

```powershell
npm install playwright
node verify.mjs http://127.0.0.1:4173 ./out/tugou
node live-check.mjs https://tugoubi.vercel.app ./out/live
```

`verify.mjs` checks both languages, missing translations, browser errors, horizontal overflow, the no-token contract state, hero-image loading, the three-item almanac columns, canvas rendering and PNG export, language persistence, the ticker pause, reduced motion, mobile tap targets, and the no-JavaScript hero.

`live-check.mjs` repeats the important rendering checks over HTTPS and verifies that both webfont families actually load.

`font-cost.mjs` is retained for occasional network-cost measurement. The old subset-font check was removed because the current page does not ship `&text=` font subsets.
