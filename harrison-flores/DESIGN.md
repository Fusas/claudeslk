---
name: Harrison Flores
description: Premium florist site; the flowers lead, drawn in ink over watercolour, on quiet white paper.
colors:
  paper: "#ffffff"
  rose-field: "#f3e3e0"
  rose-deep: "#ebc3bc"
  rose-ink: "#8e4a3f"
  ink: "#2b2b2b"
  ink-pressed: "#1c1c1c"
  ink-soft: "#595654"
  line: "rgba(43, 43, 43, 0.14)"
  line-strong: "rgba(43, 43, 43, 0.32)"
  field-tint: "#fbf8f7"
  sage-frame: "#eef1e9"
  error: "#a33a2c"
  wash-rose: "#ecc6be"
  wash-rose-light: "#f1d9d4"
  wash-sage: "#bfcbb2"
  fill-blush: "#f6e4e0"
  fill-sage: "#d9e0cf"
  fill-sage-light: "#e6ebdf"
  fill-eucalyptus: "#dde4d7"
  fill-berry: "#c98f86"
typography:
  display:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(2.9rem, 1.1rem + 6vw, 6rem)"
    fontWeight: 450
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "font-optical-sizing: auto"
  display-page:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(2.75rem, 1.4rem + 4.6vw, 5.25rem)"
    fontWeight: 450
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(2.1rem, 1.3rem + 2.8vw, 3.75rem)"
    fontWeight: 450
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  quote:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(1.75rem, 1.2rem + 1.9vw, 2.9rem)"
    fontWeight: 420
    lineHeight: 1.18
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(1.4rem, 1.15rem + 0.8vw, 1.85rem)"
    fontWeight: 450
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Hanken Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.04rem + 0.35vw, 1.3rem)"
    fontWeight: 300
    lineHeight: 1.65
  body:
    fontFamily: "Hanken Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Hanken Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.65
  button:
    fontFamily: "Hanken Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.005em"
rounded:
  mark: "4px"
  field: "0.9rem"
  frame: "1.75rem"
  frame-outer: "2.25rem"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 0.4rem + 2.6vw, 2.5rem)"
  section: "clamp(5rem, 3rem + 7vw, 10rem)"
  max-width: "78rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.5rem 0.5rem 1.5rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.ink-pressed}"
    textColor: "{colors.paper}"
  button-small:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.35rem 0.35rem 1.1rem"
    height: "2.75rem"
  nav-link:
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 0.9rem"
  nav-link-active:
    backgroundColor: "{colors.rose-field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  chip-occasion:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 0.95rem"
  tag-example:
    textColor: "{colors.rose-ink}"
    rounded: "{rounded.pill}"
    padding: "0.15rem 0.6rem"
  input-field:
    backgroundColor: "{colors.field-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0.85rem 1rem"
    height: "3.1rem"
  card-form:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.frame}"
    padding: "clamp(1.5rem, 1rem + 2.5vw, 3rem)"
  art-frame-rose:
    backgroundColor: "{colors.rose-field}"
    rounded: "{rounded.frame-outer}"
    padding: "clamp(1.5rem, 1rem + 3vw, 3.5rem)"
  art-frame-sage:
    backgroundColor: "{colors.sage-frame}"
    rounded: "{rounded.frame-outer}"
    padding: "clamp(1.5rem, 1rem + 3vw, 3.5rem)"
---

# Design System: Harrison Flores

## Overview

**Creative North Star: "The Botanical Plate on White Paper"**

The premium florist canon, played straight. The page is quiet white paper and the flowers are the only loud thing on it: botanical line drawings in graphite ink laid over translucent watercolour washes of rose and sage. Everything else (type, buttons, dividers) recedes into a graphite-on-white register so the drawings carry the brand.

Density is low and editorial. Sections breathe on a large fluid rhythm, structure comes from hairline rules rather than boxes, and dusty rose takes over whole sections as the single field colour. Type pairs a high-contrast Bodoni Moda display, often turning one phrase italic, with a light, open Hanken Grotesk for reading. The one interactive voice is the graphite pill button with a nested arrow circle, which always leads to WhatsApp.

Motion is a single moment: the illustration strokes draw themselves in on first view, then fills and washes settle. Nothing else animates on scroll.

**Key Characteristics:**
- White paper ground; rose (#f3e3e0) owns whole sections; graphite is ink, never a field.
- Imagery is inline SVG line art over watercolour washes, not photography (photo slots are placeholders until real photos exist).
- Bodoni Moda display with optical sizing and one italic turn per headline; Hanken Grotesk 300 leads, 400 body.
- Pill geometry for every control; large soft frames for art and the form card.
- Hairline dividers instead of cards; shadows only on floating or pressable things.

## Colors

A near-monochrome graphite-on-white system warmed by one dusty rose field and a rust-rose accent; sage lives inside the illustrations.

### Primary
- **Dusty Rose Field** (rose-field): the only colour that owns full-bleed sections (proof, closing CTA), plus active nav state, the open FAQ toggle and the art frame behind the bouquet service. Also the background of photo placeholders.
- **Rose Clay Ink** (rose-ink): the small-accent colour. Focus ring, italic "Flores" in the wordmark, step numerals, quote marks, leader-line dots, tick dashes, example tags, service subheads, field caret and focus border, current item in the mobile menu.

### Secondary
- **Deep Rose Petal** (rose-deep): the rose fill inside drawings, the text-selection colour and scrollbar thumb; at 45% alpha it forms the tag background and the input focus halo.

### Tertiary (illustration palette)
- **Watercolour washes**: Rose Wash (wash-rose), Pale Rose Wash (wash-rose-light) and Sage Wash (wash-sage), always rendered at 0.70 to 0.72 opacity through the watercolour filters.
- **Botanical fills**: Blush (fill-blush) and Deep Rose Petal for flower heads, Sage and Pale Sage (fill-sage, fill-sage-light) for leaves, Eucalyptus Grey-Green (fill-eucalyptus) for coin leaves, Dried Berry (fill-berry) for berries; paper white for blooms left unfilled.
- **Sage Frame** (sage-frame): the art frame behind the plants service only, pairing with the rose frame behind bouquets.

### Neutral
- **Paper White** (paper): page ground, form card, unfilled petals.
- **Graphite** (ink): headings, body text, every illustration stroke, primary button fill.
- **Pressed Graphite** (ink-pressed): primary button hover.
- **Soft Graphite** (ink-soft): leads, secondary copy, nav links, captions, answers.
- **Hairline** (line) and **Strong Hairline** (line-strong): dividers, FAQ rules, field outlines, chip outlines, leader lines.
- **Warm Field Tint** (field-tint): resting input background.
- **Brick Error** (error): invalid field outline and message only.

### Named Rules
**The Rose Field Rule.** Rose is the only colour that fills a section. Graphite stays ink (text, strokes, the button) and is never a section background; sage appears as a field only in the plants art frame.

**The Rose-Ink Accent Rule.** Every small accent, from focus ring to numeral to leader dot, is rose-ink. Do not introduce a second accent hue for UI details.

## Typography

**Display Font:** Bodoni Moda (with Bodoni 72, Didot, Georgia), embedded variable 400 to 900 with italic, optical sizing on.
**Body Font:** Hanken Grotesk (with Segoe UI, system-ui), embedded variable 100 to 900.

**Character:** A fashion-plate Didone, set a touch heavier than its hairline default (450) so it holds on white, against a calm, open grotesque kept light for leads. Both fonts ship embedded under the OFL so the site renders identically from disk.

### Hierarchy
- **Display** (450, clamp 2.9rem to 6rem, line-height 0.98, -0.035em): home hero headline only.
- **Display Page** (450, clamp 2.75rem to 5.25rem, -0.03em, max 14ch): inner-page hero headlines.
- **Headline** (450, clamp 2.1rem to 3.75rem, 1.04, -0.02em): section headings, balanced wrapping.
- **Quote** (420, clamp 1.75rem to 2.9rem, 1.18): the lead testimonial, with hanging rose-ink quote marks.
- **Title** (450, clamp 1.4rem to 1.85rem): plate annotations, steps, values. FAQ questions use the display face at 1.2rem to 1.45rem; contact details at 1.35rem.
- **Lead** (Hanken 300, clamp 1.125rem to 1.3rem, 1.65, soft graphite): the sentence under every heading; 34 to 46ch.
- **Body** (Hanken 400, 1.0625rem, 1.65): running text; answers capped at 62ch, prose at 60ch.
- **Label** (Hanken 500, 0.9375rem): field labels, nav, footer headings (600), captions.

### Named Rules
**The Italic Turn Rule.** A display headline may turn one phrase italic (weight 400), never more; the turn stays graphite. Italic in rose-ink is reserved for the wordmark, service subheads, step numerals and the current mobile-menu item.

**The Light Lead Rule.** The sentence directly under a heading is always Hanken 300 in soft graphite; body copy is 400. Never set leads bold or in the display face.

## Layout

A single centred column of up to 78rem with a fluid gutter (1rem to 2.5rem). Sections are separated by a large fluid rhythm (5rem to 10rem) and, where two white sections meet, a hairline top rule. Grids are asymmetric two-column splits rather than equal cards: hero 5/7 with the bouquet bleeding past the right edge of the container, proof 1.4/1, FAQ 1/1.6 with a sticky heading, closing 1.3/1 with the stem drawing anchored to the section's bottom edge, services alternating 1/1 with the art side flipping. Three-up rows (steps, values) are divided by strong hairlines, not boxed.

The benefits plate is an absolutely positioned figure (1020:600) with the drawing centred and three annotations attached by leader lines.

Responsive: at 1020px the plate collapses to a stacked list with rules and the leaders hide, and the FAQ unsticks; at 860px every split becomes one column, the nav pill swaps its links for a Menu toggle and the closing art hides; at 560px form fields stack and pill buttons go full width with the arrow chip pushed to the end.

## Elevation & Depth

Flat by default; depth comes from the watercolour itself and from rose fields, not from stacked surfaces. Shadows appear only on things that float or press: the floating nav pill, the primary button, and the contact form card. The nav lightens at the top of the page (60% white, no ring) and gains its ring and shadow once scrolled. Frosted blur is used for the nav pill and the full-screen mobile menu.

### Shadow Vocabulary
- **Nav float** (`box-shadow: 0 0 0 1px var(--line), 0 10px 30px -18px rgba(43,43,43,0.35)`): the floating nav pill once scrolled.
- **Button lift** (`box-shadow: 0 12px 28px -14px rgba(43,43,43,0.55)`): primary pill button; the small variant drops it.
- **Soft card** (`box-shadow: 0 0 0 1px var(--line), 0 1px 2px rgba(43,43,43,0.04), 0 18px 40px -18px rgba(43,43,43,0.18)`): the form card only.

### Named Rules
**The Hairline Over Box Rule.** Group content with 1px graphite hairlines (14% or 32%) and space. The form card is the only bordered, shadowed container.

## Shapes

Two families. Controls are full pills (999px): buttons, nav, nav links, occasion chips, tags, and the circular arrow chip and FAQ toggle inside them. Containers are large soft rectangles: the form card and photo slot at 1.75rem, art frames one step rounder at 2.25rem; inputs sit between at 0.9rem. Placeholder marks and focus outlines use 4px. Botanical forms are organic, and wash shapes are irregular blobs warped by the filter so no edge reads as geometric.

## Components

### Buttons
Calm, weighty, always pointing somewhere.
- **Shape:** full pill (999px), min-height 3.25rem, left padding 1.5rem, right side hugging a nested 2.25rem circle.
- **Primary:** graphite fill, white label (Hanken 500, 1rem), a translucent white circle (14%) holding a 1.5-stroke north-east arrow. Every primary button opens WhatsApp.
- **Hover / Focus:** fill deepens to pressed graphite and the arrow circle nudges up-right and grows 6%; press scales to 0.98 on the press easing; focus is the global 2px rose-ink ring at 3px offset.
- **Small:** 2.75rem tall, 2rem chip, no shadow; used in the nav pill.

### Chips and Tags
- **Occasion chips:** pill outline (inset 1px strong hairline), label size, no fill; a static list, not a filter.
- **Example tag:** small pill, rose-ink text at 500 on rose-deep at 45%; marks testimonials as examples.

### Cards / Containers
- **Form card:** paper, 1.75rem corners, soft card shadow, fluid padding 1.5rem to 3rem.
- **Art frames:** rose (bouquets) or sage-frame (plants) behind service illustrations, 2.25rem corners, no border or shadow.
- **Photo slot:** rose field, 1.75rem corners, a rose-ink outline icon and a caption; a placeholder for real photography.

### Inputs / Fields
- **Style:** warm field tint, no border, 1px inset hairline, 0.9rem corners, min-height 3.1rem; selects carry a drawn chevron.
- **Hover:** hairline strengthens to 32%.
- **Focus:** background turns paper, 1.5px rose-ink inset border plus a 4px rose-deep halo; caret is rose-ink.
- **Error:** 1.5px brick inset border and a brick message below.

### Navigation
A floating frosted pill fixed 0.9rem from the top, wordmark left ("Harrison" roman, "Flores" italic rose-ink), links right in soft graphite with rose pill hover and current state, small WhatsApp button at the end. Below 860px a graphite "Menu" pill with a two-bar circle opens a full-screen frosted menu of large Bodoni links that slide up in a short stagger, with the WhatsApp button at the bottom.

### FAQ
Native details/summary rows between hairlines; question in the display face, a 2.25rem outlined circle with a drawn plus that rotates into a minus and fills rose when open.

### Botanical Illustration (signature)
The imagery system, rendered as inline SVG from a per-page symbol sprite.
- **Motifs:** rose, rose in profile, bud, peony, tulip, leaf, eucalyptus coin, berry, pot, composed by placing, scaling and rotating symbol instances.
- **Ink:** graphite strokes in three non-scaling weights: contour 1.7 (petal and leaf outlines), stem 1.1 (stems, table lines, vessel edges), hairline 0.85 (petal folds, veins). Round caps and joins.
- **Fill:** each instance takes its colour through currentColor from the botanical fill palette; unclassed instances fill paper white.
- **Washes:** irregular blobs behind the ink in rose, pale rose or sage at about 0.7 opacity, each run through one of three watercolour filters (same recipe, different seeds): displaced edge, two stacked translucent passes, noise-pooled pigment, a darker drying edge masked by low-frequency noise, and paper grain. Two overlapping washes of the same hue, the second at 0.75 opacity, give the layered look.
- **Plate:** on the home page one illustration is annotated by three leader lines (strong hairline, rose-ink end dots) to its benefit notes.
- **Motion:** with JS and motion allowed, strokes draw in over 2.4s on the expo-out easing, staggered 70ms per element (foliage first), fills arrive 0.9s later over 1.4s, washes fade and settle from 96% scale. Reduced motion shows the finished drawing.

## Do's and Don'ts

### Do:
- **Do** let rose-field own whole sections, alternating with white paper; never set two rose sections back to back.
- **Do** draw new imagery from the existing symbol sprite: ink in 1.7 / 1.1 / 0.85 non-scaling strokes, fills from the botanical palette, washes through the watercolour filters at about 0.7 opacity.
- **Do** use rose-ink for every small accent (focus, numerals, dots, ticks, tags).
- **Do** route every primary action through the graphite pill button with its nested arrow circle.
- **Do** separate content with hairlines and space; reserve shadow for the nav pill, the primary button and the form card.
- **Do** keep motion to the one draw-in moment and honour reduced motion.

### Don't:
- **Don't** use graphite or sage as a full-section background; rose is the only field colour.
- **Don't** saturate the illustration palette or draw strokes in a colour other than graphite.
- **Don't** lay products out as shop-grid card rows, price tiles or discount banners.
- **Don't** add scroll reveals to sections or text; only the illustrations animate in.
- **Don't** turn more than one phrase of a headline italic, or set leads heavier than 300.
- **Don't** square off controls; buttons, chips, tags and nav are always full pills.
