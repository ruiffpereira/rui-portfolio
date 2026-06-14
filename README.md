# Rui Pereira — Portfolio

A fast, responsive personal portfolio & CV site built with [Astro](https://astro.build).
Dark, technical-editorial design. No UI framework, no runtime JS dependencies — just Astro,
a little vanilla JavaScript, and CSS.

## Getting started

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build locally
```

## Project structure

```
public/
  Rui-Pereira-CV.pdf     ← your CV (linked from the hero + contact section)
  portrait.jpg           ← replace this with your photo (portrait, ~4:5 ratio)
  scripts/main.js        ← tab routing (hash-based), mobile menu, local clock
src/
  data/site.ts           ← ALL content lives here — edit this to update the site
  layouts/Layout.astro   ← <head>, fonts, global CSS
  components/             ← Nav, Hero, Marquee, About, Experience, Stack, Work, Contact, Footer
  pages/index.astro      ← composes the page
  styles/global.css      ← the full design system (tokens, layout, responsive rules)
```

## Navigation

It's a single, continuous scroll page. The top nav links jump to each section
(`#about`, `#work`, …) and **Download CV** downloads the PDF directly — no scrolling.
Sections fade in gently as they enter the viewport; without JavaScript everything is
simply visible.

## Editing content

Everything — your bio, experience, stack, projects and contact details — lives in
**`src/data/site.ts`**. Update that one file and the whole site follows. To add a project,
append an entry to the `projects` array (set `live: true` and a real `href` to show a
"Live" badge and link to a deployed demo).

## Your photo

Drop a portrait image at `public/portrait.jpg` (roughly 4:5 / vertical). The placeholder
currently shipped there shows where it goes.

## Deploying

This is a static site — it builds to plain HTML/CSS/JS in `./dist` and can be hosted free on
**Netlify, Vercel, Cloudflare Pages or GitHub Pages**. Most of these auto-detect Astro:
build command `npm run build`, output directory `dist`. Remember to set your real domain in
`astro.config.mjs` (`site:`).
# rui-portfolio
