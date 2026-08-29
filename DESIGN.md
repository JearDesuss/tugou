# TUGOU design contract

## North star

`north_star`: A ¥1.99 print-shop poster taped inside a humid county-town KTV, photographed through a scratched phone lens at noon.

`theme`: light

`industry`: Chinese-first memecoin culture and internet-native entertainment.

`description`: TUGOU uses the sincere side of 土酷: compressed stock waterfalls, low-resolution cutouts, fake bevels, stretched type, KTV shine, and the good-morning image an elder sends because they mean it. The source material should visibly be cheap and recompressed, but each pasted object stays recognizable. The execution is intentional, but it must not look tasteful, premium, cinematic, or “designed badly by a good designer.” The page is not vaporwave, not “Asian-inspired,” and never makes older or rural taste the punchline. Finance is the joke; the blessing is not.

## Colors

| name | hex | group | role |
|---|---:|---|---|
| Ink | `#171008` | neutral | Body copy, hard keylines, deepest shadow |
| Bark | `#3A2112` | neutral | Secondary dark text and warm shadow |
| Clay | `#8A6A4A` | neutral | Muted text only |
| Rice | `#F7EFD8` | neutral | Main paper ground |
| Paper | `#FFF9E9` | neutral | Raised paper panels |
| Chrome | `#F5FBFF` | neutral | Highlights and type on chromatic surfaces |
| Lacquer | `#D92716` | primary | Primary action, plaque, status, key rules |
| Vermilion | `#FF4A1F` | support | Hot highlight and seal details |
| Imperial Gold | `#F7C928` | support | Title fill, rules, celebratory ornament |
| Jade | `#007D6B` | support | Interactive section ground |
| Lake | `#12BFD3` | support | Small active accents only |
| Subtitle Blue | `#0500FF` | support | Burned-in subtitle boxes only |
| Lotus | `#F02B87` | support | Small floral accents only |
| Toxic Green | `#00F04A` | support | Checkerboards, stretched WordArt, fake rating chrome |
| Cheap Violet | `#9200FF` | support | Bevel stop and clashing duplicate shadow |
| Mud Yellow | `#C8C200` | support | Deliberately dirty gradient stop |

No new chromatic hex belongs in a component. Add it here first or reuse an existing token.

## Surfaces

| name | hex | level | purpose |
|---|---:|---:|---|
| Rice Ground | `#F7EFD8` | 0 | Page background |
| Paper Panel | `#FFF9E9` | 1 | Definition and launch copy |
| Jade Stage | `#007D6B` | 1 | Almanac and generator section |
| Lacquer Plate | `#D92716` | 2 | Hero title plaque and primary controls |

## Typography

| family | substitute | weight | sizes | line height | tracking | role |
|---|---|---:|---|---:|---:|---|
| `ZCOOL KuaiLe` | `Microsoft YaHei`, sans-serif | 400 | 32–112px | .88–1.05 | -.04em | Chinese display, buttons, labels |
| `Noto Sans SC` | `Microsoft YaHei`, sans-serif | 400 | 14–20px | 1.45–1.75 | 0 | Body copy and controls |
| `Arial Black` | `Arial`, sans-serif | 900 | 12–28px | 1 | .04em | Latin ticker and ticker mark |
| `Songti SC` | `STSong`, serif | 700 | 18–64px | 1.15–1.55 | -.025em | Almanac and quotation register |

`fontFeatureSettings`: `"kern" 1, "liga" 1, "palt" 1` on Chinese copy. Monospace is restricted to the contract-address field.

## Type scale

| role | size | weight | line height | tracking |
|---|---:|---:|---:|---:|
| Hero | `clamp(76px, 16vw, 190px)` | 400 | .80 | -.065em |
| Display | `clamp(44px, 7vw, 92px)` | 400 | .90 | -.045em |
| Section title | `clamp(34px, 5vw, 64px)` | 400 | .95 | -.035em |
| Panel title | `clamp(26px, 3vw, 38px)` | 400 | 1.05 | -.02em |
| Lead | `clamp(20px, 2vw, 28px)` | 400 | 1.45 | -.01em |
| Body | `17px` | 400 | 1.7 | 0 |
| Small | `14px` | 400 | 1.55 | .01em |
| Label | `12px` | 400 | 1.2 | .12em |

## Spacing and shape

`base`: 4px

`elementGap`: 16px

`cardPadding`: 28px

`sectionGap`: 112px

`pageMaxWidth`: 1180px

`radius`:

- `small`: 4px
- `badges`: 999px
- `inputs`: 4px
- `buttons`: 4px
- `cards`: 12px
- `pills`: 999px

There are three physical radii: 4px for fabricated objects, 12px for large collage plates, and a pill only for compact status.

## Elevation

All elevation copies cheap desktop-publishing defaults: thick black keyline, white inner highlight, offset black duplicate, and an occasional badly blurred grey shadow. The recipes intentionally collide, but the same collision repeats across the page. Nothing should resemble polished glassmorphism or restrained product UI.

## Layout

The hero is an 840×672 compressed JPEG enlarged to full-bleed size. Real HTML lettering collides with the dog, price sticker, vertical slogan, and star-rating badge. Below it, distinct picture plates appear in the definition, almanac, launch, and truth sections; panels rotate a little too far, checkerboards meet floral gradients without buffers, and headings escape their containers. Content width is still 1180px and body copy stays readable. Mobile returns to one column, but preserves overlaps and mismatched visual scale.

## Imagery

`assets/tugou-too-cool-hero-v3.jpg` is the master visual plate. It is deliberately recompressed at 840×672, but not blanket-blurred; the dog, waterfall, CD, koi, minivan, and bonsai stay readable. Three additional 800×600 JPEG plates—`tugou-qipao-waterfall.jpg`, `tugou-water-heart.jpg`, and `tugou-blessing-park.jpg`—carry the same visual world through later sections. All four are text-free so every Chinese character remains selectable, accessible, and correct. Keep their halos, scale conflicts, rectangular seams, and cheap saturation.

## Components

| name | role | description |
|---|---|---|
| Top rail | orientation | Lacquer bar with mark, two anchor links, and language switch |
| Hero plaque | recognition | Bevelled red-and-gold sign containing only real title text |
| ¥1.99 sticker | interruption | Rotated yellow price line that partially escapes the hero |
| Five-star badge | fake authority | Bright-blue shop-rating badge, clearly decorative |
| Vertical slogan | collision | Real `中华土酷` text running into the photographic collage |
| Subtitle box | translation | Pure blue, square-corner, Arial-like burned-in caption |
| Fortune ticker | movement | One concise blessing line with an explicit pause control |
| Definition spread | meaning | Quote, one short explanation, three compact facts |
| Almanac | daily ritual | Three 宜 and three 忌 items derived from the date |
| Card maker | participation | Name, blessing, and save action over the master visual plate |
| Launch billboard | truth | CA status and safety copy; disabled until a real address exists |
| Honest footer | boundary | Two direct sentences; no essay and no decorative wink |

## Dos

- Enlarge compressed JPEGs enough to expose halos and aliasing, but keep the pasted subjects recognizable.
- Keep Chinese primary and complete; English translates the same propositions and never supplies the missing joke.
- Write mainland-Simplified body copy with `“…”` and `‘…’`; use traditional characters only for a real object that requires them.
- Keep the burned-in subtitle box pure blue and square; its awkwardness is specific to the source language.
- Use bevels, black duplicates, white highlights, and cheap blurred shadows together; the collision is the elevation system.
- Let copy be short enough to read in one beat; this is a memecoin page, not an essay about memecoins.
- State launch status plainly; until a contract exists, the interface says `待公布` and the copy action is disabled.

## Don’ts

- Don’t build vaporwave and call it 土酷; this world is daylight, warm, and optimistic.
- Don’t use Chinese characters as texture; every glyph must be correct and meaningful.
- Don’t make the grandmother, rural taste, or “bad design” the joke; the blessing is sincere.
- Don’t polish away JPEG halos, aliasing, collisions, stretched type, or crude selection edges; also don’t bury every picture under a blur filter.
- Don’t invent tokenomics, team claims, lock status, or a realistic placeholder CA.
- Don’t repeat one WordArt recipe neatly; adjacent headings should clash in color, warp, outline, or shadow while remaining readable.
- Don’t explain a joke twice; if the quote and one sentence carry it, move on.

## Motion

Decorative motion is slow and interruptible: the hero plate breathes by at most 1.5%, chrome glints travel in stepped passes, and the ticker can be paused. `prefers-reduced-motion` removes travel and keeps static shine. No smooth luxury-product float, springy UI, or constant parallax on touch devices.

## Copy contract

Chinese is the source. It should sound like a smart Chinese crypto account with taste, not a translated Western pitch: short sentences, ordinary terms (`meme 币`, `合约地址`, `梭哈`, `助记词`), no forced four-character slogans, and no invented slang. The English is concise and literal. Exact live propositions:

- 土狗币，就是 meme 币。
- 名字就是品类。
- 目前没有代币，也没有合约地址。
- meme 币可能归零。别借钱，别梭哈。
- 金融是玩笑，祝福是真的。
