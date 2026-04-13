/* ========================================
   MINECRAFT TIMELINE — HORIZONTAL ENGINE
   ========================================
   Reads from TIMELINES array in data.js.
   Always shows all timelines stacked.
   ======================================== */

const track = document.getElementById('track');
const viewport = document.getElementById('viewport');
const scrollHint = document.getElementById('scroll-hint');

// ── Render all timelines as horizontal rows ──

function render() {
  track.innerHTML = '';
  let cardIndex = 0;

  TIMELINES.forEach(tl => {
    const row = document.createElement('div');
    row.className = 'tl-row';

    // Label (sticky left)
    const label = document.createElement('div');
    label.className = 'tl-row__label';
    label.textContent = `${tl.icon} ${tl.name}`;
    label.style.color = tl.colorLight;
    label.style.borderColor = tl.color;
    row.appendChild(label);

    // Horizontal line with entries
    const line = document.createElement('div');
    line.className = 'tl-row__line';

    // The colored bar
    const lineBar = document.createElement('div');
    lineBar.className = 'tl-row__bar';
    lineBar.style.background = tl.color;
    line.appendChild(lineBar);

    // Group entries by year
    const years = [...new Set(tl.entries.map(e => e.year))].sort((a, b) => a - b);

    years.forEach((year, yi) => {
      if (yi > 0) {
        const sep = document.createElement('div');
        sep.className = 'year-sep';
        sep.style.background = tl.color;
        line.appendChild(sep);
      }

      const yearCol = document.createElement('div');
      yearCol.className = 'year-col';

      const yearLabel = document.createElement('div');
      yearLabel.className = 'year-col__label';
      yearLabel.textContent = year;
      yearLabel.style.color = tl.colorLight;
      yearCol.appendChild(yearLabel);

      const entriesWrap = document.createElement('div');
      entriesWrap.className = 'year-col__entries';

      const yearEntries = tl.entries.filter(e => e.year === year);
      yearEntries.forEach(entry => {
        const card = createCard(entry, tl, cardIndex);
        entriesWrap.appendChild(card);
        cardIndex++;
      });

      yearCol.appendChild(entriesWrap);
      line.appendChild(yearCol);
    });

    row.appendChild(line);
    track.appendChild(row);
  });
}

function createCard(entry, tl, index) {
  const card = document.createElement('div');
  let classes = 'entry-card';

  // Detect divergence entries
  if (entry.title.includes('DIVERGENCE')) {
    classes += ' entry-card--divergence';
  }

  // Detect shared entries (same as real timeline)
  const realTl = TIMELINES.find(t => t.id === 'real');
  if (tl.id !== 'real' && realTl) {
    const isShared = realTl.entries.some(re =>
      re.year === entry.year && re.month === entry.month && re.title === entry.title
    );
    if (isShared && !entry.title.includes('DIVERGENCE')) {
      classes += ' entry-card--shared';
    }
  }

  card.className = classes;
  card.style.animationDelay = `${Math.min(index * 0.02, 1.2)}s`;
  card.style.setProperty('--card-accent', tl.color);

  const tagClass = entry.tag === 'alt' ? 'tag--alt' : `tag--${entry.tag}`;
  const tagLabel = entry.tag.toUpperCase();

  card.innerHTML = `
    <div class="entry-date" style="color:${tl.colorLight}">${entry.month} ${entry.year}</div>
    <div class="entry-title">${entry.title}</div>
    <div class="entry-desc">${entry.desc}</div>
    <span class="entry-tag ${tagClass}">${tagLabel}</span>
  `;

  return card;
}

// ── Scroll hint auto-hide ──

function setupScrollHint() {
  viewport.addEventListener('scroll', () => {
    if (viewport.scrollLeft > 50) {
      scrollHint.classList.add('hidden');
    }
  }, { passive: true });
}

// ── Mouse wheel → horizontal scroll ──

function setupWheelScroll() {
  viewport.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      viewport.scrollLeft += e.deltaY;
    }
  }, { passive: false });
}

// ── Particle Background ──

function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const blockColors = ['#5D8C2E', '#8B6914', '#7F7F7F', '#5C4A0E', '#2CCDB1', '#FCDB05'];
  const particles = [];

  for (let i = 0; i < 25; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 5 + 2,
      speed: Math.random() * 0.25 + 0.08,
      color: blockColors[Math.floor(Math.random() * blockColors.length)],
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.008
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
      p.y += p.speed;
      p.rotation += p.rotSpeed;
      if (p.y > canvas.height + p.size) {
        p.y = -p.size;
        p.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// ── Init ──

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  render();
  setupScrollHint();
  setupWheelScroll();
});
