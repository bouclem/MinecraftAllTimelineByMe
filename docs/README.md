# Minecraft Timeline

A visual, interactive horizontal-scrolling website showing the complete month-by-month history of Minecraft from April 2009 to 2026 — plus alternate "what if" timelines.

## Features

- **Horizontal scrolling** layout — timelines flow left to right
- **Multiple timelines** supported — add as many as you want in `data.js`
- **Real Timeline**: Every major Minecraft milestone, update, and event through 2026
- **Alternate Timeline**: A speculative history where Minecraft never existed
- **Toggle any combination** of timelines via nav buttons
- **Shared starting points** with clear divergence markers
- **Minecraft-themed design**: Pixel fonts, block particles, earthy color palette
- **Mouse wheel** scrolls horizontally in the timeline area

## How to Use

Open `index.html` in any modern browser. No build tools or dependencies required.

Click timeline buttons at the top to toggle which timelines are visible. Use "All" to see them stacked.

## Adding New Timelines

Edit `data.js` and add a new object to the `TIMELINES` array. See the template comment at the bottom of the file. The UI picks it up automatically.

## Tech Stack

- Vanilla HTML, CSS, JavaScript
- Google Fonts (Press Start 2P, VT323)
- Canvas API for particle background
