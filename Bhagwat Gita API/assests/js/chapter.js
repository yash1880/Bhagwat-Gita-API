let currentCh = 1;
const chapterPhotos = {
    1: "./assests/images/chapter/ch-1.webp",
    2: "./assests/images/chapter/ch-2.webp",
    3: "./assests/images/chapter/ch-3.webp",
    4: "./assests/images/chapter/ch-4.webp",
    5: "./assests/images/chapter/ch-5.webp",
    6: "./assests/images/chapter/ch-6.webp",
    7: "./assests/images/chapter/ch-7.webp",
    8: "./assests/images/chapter/ch-8.webp",
    9: "./assests/images/chapter/ch-9.webp",
    10: "./assests/images/chapter/ch-10.webp",
    11: "./assests/images/chapter/ch-11.webp",
    12: "./assests/images/chapter/ch-12.webp",
    13: "./assests/images/chapter/ch-13.webp",
    14: "./assests/images/chapter/ch-14.webp",
    15: "./assests/images/chapter/ch-15.webp",
    16: "./assests/images/chapter/ch-16.webp",
    17: "./assests/images/chapter/ch-17.webp",
    18: "./assests/images/chapter/ch-18.webp"
};

async function loadChapter(n) {
    if (n < 1 || n > 18) return;
    currentCh = n;

    showLoader();
    const list = document.getElementById('verses-list');
    list.innerHTML = "";
    window.scrollTo(0, 0);

    try {
        const response = await fetch(`https://vedicscriptures.github.io/chapter/${n}`);
        const chData = await response.json();
        console.log('FULL API DATA:', chData);

        // ✅ FIXED CHAPTER NAME - Multiple fallbacks
        let nameText = "";
        if (chData.name_transliterated) {
            nameText = chData.name_transliterated;
        } else if (chData.name && typeof chData.name === 'object') {
            nameText = chData.name.hindi || chData.name.english || chData.name.en || Object.values(chData.name)[0];
        } else if (chData.name) {
            nameText = chData.name;
        } else {
            nameText = `Chapter ${n}`;
        }

        let summaryText = "Summary unavailable";
        if (chData.summary) {
            summaryText = typeof chData.summary === 'object' ?
                (chData.summary.hindi || chData.summary.en || chData.summary.english) :
                chData.summary;
        }

        // Update UI
        document.getElementById('ch-title').innerText = `Chapter ${n}: ${nameText}`;
        document.getElementById('ch-subtitle').innerText = `${chData.verses_count || 47} Verses`;
        document.getElementById('ch-photo').src = chapterPhotos[n] || "./assests/images/chapter/ch-1.webp";
        document.getElementById('ch-summary-text').innerText = summaryText;

        let gridHtml = "";
        const totalVerses = chData.verses_count || 47;
        for (let i = 1; i <= totalVerses; i++) {
            gridHtml += `<div class="v-box" onclick="jumpToVerse(${i})">${i}</div>`;
        }
        document.getElementById('v-grid').innerHTML = gridHtml;

        hideLoader();
        loadVersesFast(n, totalVerses, list);

    } catch (err) {
        console.error("Load failed:", err);
        hideLoader();
        document.getElementById('ch-title').innerText = `Chapter ${n}`;
        document.getElementById('ch-summary-text').innerText = 'Error loading chapter';
    }
}

async function loadVersesFast(chapterNum, total, list) {
    for (let i = 1; i <= total; i += 4) {
        const promises = [];
        for (let j = i; j <= Math.min(i + 3, total); j++) {
            promises.push(fetchVerse(chapterNum, j));
        }
        const results = await Promise.allSettled(promises);
        results.forEach(result => {
            if (result.status === 'fulfilled') {
                const row = createVerseRow(result.value);
                list.appendChild(row);
            }
        });
        await new Promise(r => setTimeout(r, 30));
    }
}

async function fetchVerse(ch, v) {
    const cacheKey = `gita_${ch}_${v}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) return JSON.parse(cached);

    try {
        const res = await fetch(`https://vedicscriptures.github.io/slok/${ch}/${v}`);
        const data = await res.json();
        const verse = {
            num: v,
            text: data.siva?.et?.replace(/^\d+\.\d+\.?\s*/, "") || "Verse unavailable"
        };
        localStorage.setItem(cacheKey, JSON.stringify(verse));
        return verse;
    } catch (e) {
        return { num: v, text: "Loading..." };
    }
}

function createVerseRow(data) {
    const row = document.createElement('div');
    row.className = "verse-row";
    row.id = `v-${data.num}`;
    row.innerHTML = `
                <div class="verse-label">Verse ${data.num}</div>
                <div class="verse-content">${data.text}</div>
            `;
    return row;
}

function showLoader() { document.getElementById('loader').style.display = 'block'; }
function hideLoader() { document.getElementById('loader').style.display = 'none'; }
function jumpToVerse(i) {
    const el = document.getElementById('v-' + i);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function nav(step) {
    const next = currentCh + step;
    if (next >= 1 && next <= 18) loadChapter(next);
}


loadChapter(1);
