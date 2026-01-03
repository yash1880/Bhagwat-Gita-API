// script.js (Updated for exact image.jpg card design)
document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('chapter-container');
    container.innerHTML = `<div class="text-center py-5"><div class="spinner-border text-primary" style="width: 3rem; height: 3rem;"></div><p class="mt-3">Loading Chapters...</p></div>`;
    
    try {
        const data = await (await fetch('https://vedicscriptures.github.io/chapters')).json();
        container.innerHTML = data.map(chap => `
            <div class="col-xl-6 col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="chapter-card position-relative overflow-hidden h-100">
                    <!-- Background gradient like image.jpg -->
                    <div class="card-bg-gradient"></div>
                    
                    <!-- Header with chapter number & Sanskrit name -->
                    <a href="./chapter.html?chapter=${chap.chapter_number}" class="read-btn" style="text-decoration: none; color: inherit;">
                    <div class="card-header position-relative">
                        <div class="chapter-badge">
                            <span class="chapter-number">Chapter ${chap.chapter_number}</span>
                        </div>
                        <h3 class="chapter-sanskrit mb-2">${chap.name}</h3>
                    </div>
                    </a>
                    
                    <!-- Content body -->
                    
                    <!-- Read button -->
                    <a href="./chapter.html?chapter=${chap.chapter_number}" class="read-btn" style="text-decoration: none; color: inherit;">
                    <div class="card-body p-4">
                        <p class="chapter-summary text-wrap">${(chap.summary?.hi || chap.summary?.en || 'अर्जुन का युद्धभूमि में विषाद...').replace(/<[^>]*>/g, '').slice(0, 100)}${chap.summary && chap.summary.length > 100 ? '...' : ''}</p>
                        
                        <!-- Verses badge like image.jpg -->
                        <div class="verses-badge mt-auto">
                            <i class="bi bi-book me-2"></i>
                            <span>${chap.verses_count} श्लोक</span>
                            <span class="verses-en ms-2">${chap.verses_count} Verses</span>
                        </div>
                    </div>
                       
                    </a>
                    
                    <!-- Decorative elements -->
                    <div class="card-deco-top"></div>
                    <div class="card-deco-bottom"></div>
                </div>
            </div>
        `).join('');
    } catch(e) {
        container.innerHTML = `<div class="col-12"><div class="alert alert-danger text-center py-5"><i class="bi bi-exclamation-triangle-fill fs-1 mb-3 d-block"></i>Error loading chapters</div></div>`;
    }
});
