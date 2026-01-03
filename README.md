
Bhagavad Gita Web Application
A modern, responsive web application designed to bring the ancient wisdom of the Bhagavad Gita to a digital audience. This project provides a clean, user-friendly interface to explore all 18 chapters, read summaries, and study individual verses in both Hindi and English.

🌟 Features
Chapter Explorer: Browse all 18 chapters of the Bhagavad Gita with real-time data fetching.

Detailed Chapter Views: View chapter-specific summaries and metadata like verse counts.

Verse-by-Verse Navigation: Fast-loading verse list with a sidebar grid for jumping directly to specific verses.

Multilingual Support: Access content in English and Hindi.

Responsive Design: Fully optimized for mobile, tablet, and desktop using Bootstrap 5.

Interactive UI: Hover effects, smooth scrolling, and a professional "FAQ" section to assist users.

🛠️ Technology Stack
Frontend: HTML5, CSS3, JavaScript (ES6+)

Framework: Bootstrap 5 for layout and components.

Icons: Bootstrap Icons.

API: Vedic Scriptures API for authentic Gita data.

📂 Project Structure
Plaintext
├── assests/
│   ├── css/
│   │   └── style.css      # Custom styling for home and components
│   ├── js/
│   │   ├── script.js     # Logic for fetching and rendering chapters
│   │   └── chapter.js    # Logic for individual chapter/verse views
│   └── images/            # Local image assets (logos, chapter banners)
├── home.html              # Landing page with hero section and FAQ
└── chapter.html           # Detail page for reading chapters and verses
🚀 Getting Started
Clone the repository:

Bash
git clone https://github.com/your-username/bhagavad-gita-web.git
Open the project: Simply open home.html in any modern web browser.

API Connectivity: Ensure you have an active internet connection, as the app fetches shlokas and summaries directly from the Vedic Scriptures API.

📖 Usage
Home Page: Scroll through the "Chapters" section to see a preview of each chapter. Click on a card to start reading.

Reading: In the chapter view, use the "Next" and "Prev" buttons in the sidebar to move through the Gita. Use the numeric grid to jump to a specific verse.

FAQ: Visit the bottom of the home page to find answers to common questions about the Gita.
