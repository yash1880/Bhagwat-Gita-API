# **🌟 Bhagwat Gita Reader** 🌟
Responsive **Bhagavad Gita** web app – **18 chapters**, **700 shlokas** in **Hindi/English/Sanskrit** w/ audio. Krishna-Arjuna wisdom from Mahabharata. Built for modern browsers, mobile-first.[file:2][file:5]

## 🚀 **Live Demo**
- **Home**: Hero slider → Chapter cards → `chapter.html?chapter=1`
- **API**: `https://vedicscriptures.github.io/chapters.json` & `/slok/{ch}/{v}`[file:4]
- **Screenshots**: Hero (gradient banner), Cards (hover lift), Verses (grid select).[file:3]

## ✨ **Key Features**
- **Multilingual**: Dual Hindi-English, transliteration.
- **Dynamic**: Async chapters/verses, localStorage cache, prev/next nav.
- **UI Magic**: Bootstrap 5 navbar/accordion, custom CSS (3.8rem hero, gradients, shadows).
- **Responsive**: Fixed fonts (big **bold** stays BIG, small stays tiny), sidebar, verse rows.
- **Fast**: Promise.allSettled verses, spinner loaders.[file:1][file:3][file:4]

## 📁 **Files (5 Total)**
| File | Size | Purpose |
|------|------|---------|
| `home.html` | 11k | Hero, chapters grid, FAQ (18 ch, Vyasa, yogas).[file:2] |
| `chapter.html` | 4k | Sidebar "Bhagavad Gita", verse grid, summary/image.[file:1] |
| `style.css` | 8k | Hero 3.8rem/2.5rem, cards 1.5rem, footer 0.8rem, media queries.[file:3] |
| `script.js` | 2k | Chapter cards map from API.[file:5] |
| `chapter.js` | 5k | LoadChapter(n), fetchVerse cache, jumpToVerse(i).[file:4] |

**Assets**: `assests/images/logo.webp`, `ch-1.webp`...`ch-18.webp`.

## ⚡ **1-Min Setup**
1. **Download** all 5 files + `assests/`.
2. **Open** `home.html` (Live Server/VS Code).
3. **Click** chapter card → Verses load/cached.
4. **Deploy**: GitHub repo → Settings → Pages → Deploy.

**Tested**: Chrome/Firefox/Safari mobile/desktop.

## 📖 **Gita Facts (from FAQ)**
- **18 Chapters**, 700 shlokas, Vyasa-composed celestial song.[file:2]
- **Yogas**: Karma (action), Bhakti (devotion), Jnana (knowledge), Dhyana (meditation).
- **Benefits**: Mental clarity, stress reduction, decision-making.

## 🔧 **Customization**
```css
/* Lock fonts (add to style.css) */
.hero-title-hindi { font-size: 3.8rem !important; } /* BIG */
.chapter-number { font-size: 0.85rem !important; } /* small */

