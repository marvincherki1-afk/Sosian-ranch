# Sosian Ranch Website

## What's in this folder
- `index.html` — the whole site (Home, Livestock, About, Visit, FAQ, Contact — all on one scrolling page with a nav bar that jumps to each section)
- `styles.css` — all colors, layout, and fonts
- `script.js` — makes the FAQ questions open/close, and the mobile menu button work
- `images/` — empty for now; this is where your real farm photos go

## Every animal card currently shows a plain icon (🐄, 🐐, 🐑, 🐴) with a "Your photo here" label.
To swap a real photo in later:
1. Put your photo file inside the `images` folder (e.g. `images/sahiwal-cow.jpg`)
2. In `index.html`, find the matching `<div class="thumb">` for that animal
3. Replace `<div class="thumb">🐄<span>Your photo here</span></div>` with:
   `<div class="thumb"><img src="images/sahiwal-cow.jpg" alt="Sahiwal Cattle" style="width:100%;height:100%;object-fit:cover;"></div>`

## Testimonials
The three testimonials on the site are examples — replace the quote text and the "Farmer, County" line under `<section class="testimonials">` in `index.html` with your real customers' words whenever you have them.

## Contact form
The form currently just shows a "Thanks" popup — it isn't connected to receive real messages yet. To make it actually deliver messages to your email or WhatsApp, you'll need a form service like Formspree (free tier available) — let me know if you'd like help wiring that up later.

## Publishing to GitHub Pages
1. Download and unzip this folder
2. Create a new GitHub repository (or use an existing one)
3. On GitHub: **Add file → Upload files** → drag in `index.html`, `styles.css`, `script.js`, and the `images` folder
4. Commit the changes
5. Go to **Settings → Pages**, set the source branch to `main` (or `master`) and folder to `/root`, then save
6. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a few minutes

## Contact details already wired into the site
- Phone / WhatsApp: +254 784 940 178
- Email: sosianranch0@gmail.com
- Location: Rumuruti, Laikipia County, Kenya
