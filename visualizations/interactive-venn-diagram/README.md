# Interactive Venn Diagram (JSXGraph + MathJax)

An interactive Venn diagram for MATE 3001: students drag number tokens into regions A, B, or A ∩ B and get immediate feedback.

## Files
- `venn-diagram-interactive.html`: Main page (loads JSXGraph + MathJax via CDN)
- `venn-diagram.js`: Logic for sets, dragging, evaluation, reset
- `styles.css`: Styling and responsive board layout

## Features
- Two overlapping circles with distinct colors
- 7 draggable number tokens (union of A and B)
- Randomized set generation with non-empty intersection (≥ 2 items)
- Evaluate with per-item feedback; reset for new sets
- MathJax-rendered set definitions A and B
- Responsive layout (desktop and mobile)

## Quick Start
1. Open `venn-diagram-interactive.html` in a modern browser.
2. Drag tokens into A-only, B-only, or A ∩ B.
3. Click “Evaluate Answer” to see the score and feedback.
4. Click “Reset/New Sets” for a fresh randomized problem.

No server required; runs fully client-side.

## Embedding
To embed on a website or LMS, use an iframe:

```html
<iframe src="interactive-venn-diagram/venn-diagram-interactive.html" width="800" height="600" frameborder="0"></iframe>
```

## Dependencies (via CDN)
- JSXGraph: `https://cdn.jsdelivr.net/npm/jsxgraph@1.8.0/distrib/jsxgraphcore.js`
- JSXGraph CSS: `https://cdn.jsdelivr.net/npm/jsxgraph@1.8.0/distrib/jsxgraph.css`
- MathJax v3: `https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js`

If your environment blocks CDNs, download these files locally and update the `<script>` and `<link>` tags accordingly.

## Notes
- Region detection uses circle membership: A-only, B-only, A ∩ B, or outside.
- Tokens start in a “pool” area at the bottom of the board.
- Accessibility: Buttons support full keyboard control; tokens are draggable via mouse/touch.
- Tested in recent versions of Chrome and Firefox.

## License
Educational use for MATE 3001 materials. 
