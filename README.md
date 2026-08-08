# Preserving Independent Thought in the Age of AI

An informational single-page website summarizing a research essay's findings
for college students and everyday AI users. A student project (ENGL 2010,
Project 3), redesigned from the original `heyh` project.

## Design approach

Research-explainer style: full-width sections, short intro paragraphs, and
scannable bullet points, with a simple graphic or stat panel for every idea.

- Full-page banded layout (~1180px content width), not a narrow text column.
- Student-first hierarchy: the research is condensed into three plain findings,
  and the six full study summaries (SVG diagrams, stats, and limitation
  bullets) live in an expandable section for readers who want the evidence.
- The page ends with the checklist and a closing takeaway.
- A slim text-only anchor bar at the top (no logo or branding) for jumping
  between sections.
- Dark "key idea" strips carry the two central quotes of the argument.
- Interactive checklist (2×2 grid), five strategy cards, and three copyable
  prompt cards.
- Sources in a hanging-indent reference list; Author's Note collapses.

## Running it

No build step. Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080.

## Files

- `index.html` — all content, structure, and inline SVG graphics
- `styles.css` — banded layout, typography, diagram styling
- `app.js` — checklist state and copy-prompt buttons
