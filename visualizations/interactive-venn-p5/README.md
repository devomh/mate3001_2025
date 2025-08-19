# Interactive Venn Diagram (p5.js + MathJax)

A p5.js implementation of the interactive Venn diagram used in MATE 3001. Students drag number tokens into A-only, B-only, or A ∩ B, then evaluate their answers.

## Files
- `venn-diagram-p5.html`: Main page with p5.js and MathJax via CDN
- `p5-venn.js`: p5 sketch with circles, tokens, drag logic, evaluation, reset
- `styles.css`: Layout and responsive canvas holder

## Features
- Two overlapping circles with semi-transparent fills
- 7 draggable number tokens (union of A and B)
- Randomized set generation with intersection size 2–3
- Evaluate answers with per-item feedback and coloring
- MathJax-rendered set definitions A and B
- Responsive canvas sizing to parent container

## Quick Start
1. Open `venn-diagram-p5.html` in a modern browser.
2. Drag tokens into A-only, B-only, or A ∩ B.
3. Click “Evaluate Answer” to see the score and feedback.
4. Click “Reset/New Sets” for a fresh randomized problem.

No server required; runs fully client-side.

## Embedding
```html
<iframe src="interactive-venn-p5/venn-diagram-p5.html" width="800" height="600" frameborder="0"></iframe>
```

## Notes
- Region detection is based on circle membership using Euclidean distance.
- Tokens are rendered and dragged within the p5 canvas.
- For accessibility beyond mouse/touch drag, consider adding keyboard controls.

## p5.js vs JSXGraph
- Simplicity: p5.js is lower-level; you implement dragging, hit-testing, and object management yourself. JSXGraph provides built-in geometric primitives and interaction helpers, so for math diagrams (sets, geometry, graphs) JSXGraph is simpler and faster to build correctly.
- Flexibility: p5.js excels for custom visuals, animations, and game-like interactions. If you plan diverse, highly customized visualizations, p5 offers broad creative control.
- Math Rendering: Both versions use MathJax outside the canvas; JSXGraph also supports text elements on the board.
- Recommendation: For math-related visualizations with sets/geometry, JSXGraph is generally simpler. Choose p5.js when you want bespoke visuals or animations that go beyond standard math diagrams.
