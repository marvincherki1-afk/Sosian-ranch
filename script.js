// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    document.querySelectorAll('.faq-item').forEach(i => { if (i !== item) i.classList.remove('open'); });
    item.classList.toggle('open');
  });
});

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '60px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = '#1f3d2b';
    navLinks.style.padding = '16px 20px';
    navLinks.style.gap = '14px';
  });
}

// Show whole photo on a blurred backdrop (horses + gallery)
document.querySelectorAll('.fit').forEach(box => {
  const img = box.querySelector('img');
  if (!img) return;
  img.classList.add('fg');
  const bg = img.cloneNode();
  bg.className = 'bg';
  bg.alt = '';
  bg.setAttribute('aria-hidden', 'true');
  box.insertBefore(bg, img);
});

// Category tiles: tap Cattle / Goats / Sheep / Horses to filter the livestock cards
const tiles = document.querySelectorAll('.cat-tile');
const cards = Array.from(document.querySelectorAll('.animal-card'));
const grid = document.querySelector('.animal-grid');
const tabs = document.getElementById('catTabs');

tiles.forEach(tile => {
  const filter = tile.dataset.filter;
  const count = filter === 'all' ? cards.length : cards.filter(c => c.dataset.cat === filter).length;
  tile.querySelector('small').textContent = count + (count === 1 ? ' type' : ' types');

  tile.addEventListener('click', () => {
    tiles.forEach(t => t.classList.toggle('active', t === tile));
    cards.forEach(c => { c.hidden = !(filter === 'all' || c.dataset.cat === filter); });
    grid.classList.toggle('filtered', filter !== 'all');
    tabs.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
