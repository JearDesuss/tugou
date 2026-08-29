# 土狗 · $TUGOU

A Chinese-first memecoin landing page built around a very literal joke: in Chinese crypto, a memecoin is already called a `土狗币`. The coin’s name is its category.

The visual language is `土酷` (“Too Cool”): glossy good-morning collage, daylight waterfalls, KTV shine, gold shopfront lettering, and sincere excess. The reference is [this reel by @fakeplasticbrands](https://www.instagram.com/reel/DcdbF-JueeA/).

Live site: <https://tugoubi.vercel.app>

## Run locally

The site is static and has no build step.

```powershell
npx http-server . -p 4173 -c-1
```

Then open <http://127.0.0.1:4173>.

## Current page

- Full-bleed 840×672 compressed-JPEG 土酷 hero with real HTML lettering
- Distinct qipao, water-heart dog, and blessing-park collage plates throughout the page
- Short Chinese-first explanation of `土狗币`
- Date-seeded 土狗黄历 with three `宜` and three `忌`
- Local canvas good-morning-card generator and PNG export
- Explicit launch-status block: no presale and no contract address yet
- Concise risk statement in both languages

The page deliberately does not publish invented tokenomics, liquidity claims, team claims, or a realistic placeholder contract address.

## Files

| File | Purpose |
|---|---|
| `index.html` | Accessible page structure and Chinese no-JS copy |
| `styles.css` | The bounded visual system and responsive layout |
| `script.js` | Chinese/English copy, language switching, almanac, and card maker |
| `DESIGN.md` | Current design and cultural contract |
| `assets/tugou-too-cool-hero-v3.jpg` | Moderately compressed 840×672 master collage used by the hero and card maker |
| `assets/tugou-qipao-waterfall.jpg` | Qipao-and-waterfall section collage |
| `assets/tugou-water-heart.jpg` | Water-heart village-dog section collage |
| `assets/tugou-blessing-park.jpg` | Wings, roses, teacup, and park section collage |
| `test/` | Optional Playwright verification scripts |

`content.json` and the prototypes under `assets/` are retained as research/archive material. They are not loaded by the current page.

## Copy rules

Chinese is the source language. It uses ordinary mainland crypto vocabulary and Simplified Chinese punctuation. English translates the same propositions; it does not add a separate joke.

The live page should stay short. The five lines that matter are:

- `土狗币，就是 meme 币。`
- `名字就是品类。`
- `目前没有代币，也没有合约地址。`
- `meme 币可能归零。别借钱，别梭哈。`
- `金融是玩笑，祝福是真的。`

## Cultural boundary

The page celebrates the sincere side of 土酷. The finance is the joke; rural or older-generation taste is not. JPEG texture, awkward crops, and clashing WordArt are intentional source-era texture, but the pictures must remain recognizable—not an excuse for broken controls or fake Chinese. Do not add vaporwave, Shibas, Japanese motifs, decorative fake Chinese, or sneering “so bad it’s good” copy. Read [DESIGN.md](DESIGN.md) before visual changes.
