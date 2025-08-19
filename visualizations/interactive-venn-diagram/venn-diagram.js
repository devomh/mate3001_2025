/*
  Interactive Venn Diagram using JSXGraph + MathJax
  - Two circles (A, B)
  - 7 draggable number tokens (union of A and B)
  - Evaluate correctness and reset with new random sets
*/

(function () {
  const COLORS = {
    A: '#007cba',
    B: '#28a745',
    AB: '#8a2be2',
    TOKEN: '#374151',
    OK: '#059669',
    ERR: '#dc2626',
  };

  /** Utility functions **/
  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function sample(arr, k) {
    return shuffle(arr).slice(0, k);
  }

  function arrayUnion(a, b) {
    return Array.from(new Set([...a, ...b]));
  }

  function arrayIntersect(a, b) {
    const bs = new Set(b);
    return a.filter((x) => bs.has(x));
  }

  function arrayDiff(a, b) {
    const bs = new Set(b);
    return a.filter((x) => !bs.has(x));
  }

  /** Global-ish state inside closure **/
  let board = null;
  let circleA = null;
  let circleB = null;
  let centerA = null;
  let centerB = null;
  const radius = 3; // fixed radius used for hit-testing

  let setA = [];
  let setB = [];
  let tokens = []; // [{value, point}]

  /** Initialize board and static geometry **/
  function initBoard() {
    if (board) {
      try { JXG.JSXGraph.freeBoard(board); } catch (e) {}
    }

    board = JXG.JSXGraph.initBoard('board', {
      boundingbox: [-8, 6.5, 8, -3.8],
      axis: false,
      showNavigation: false,
      showCopyright: false,
    });

    // Centers for circles A and B
    // Place centers closer than 2*radius to ensure visible overlap
    centerA = board.create('point', [-2.2, 1.7], { name: '', visible: false, fixed: true });
    centerB = board.create('point', [2.2, 1.7], { name: '', visible: false, fixed: true });

    // Circles
    circleA = board.create('circle', [centerA, radius], {
      strokeColor: COLORS.A,
      strokeWidth: 3,
      fillColor: COLORS.A,
      fillOpacity: 0.22,
      highlight: false,
      fixed: true,
    });
    circleB = board.create('circle', [centerB, radius], {
      strokeColor: COLORS.B,
      strokeWidth: 3,
      fillColor: COLORS.B,
      fillOpacity: 0.22,
      highlight: false,
      fixed: true,
    });

    // Labels A and B
    board.create('text', [centerA.X() - 0.2, centerA.Y() + radius + 0.4, 'A'], {
      anchorX: 'right', anchorY: 'bottom', fontSize: 18, fixed: true,
    });
    board.create('text', [centerB.X() + 0.2, centerB.Y() + radius + 0.4, 'B'], {
      anchorX: 'left', anchorY: 'bottom', fontSize: 18, fixed: true,
    });

    // Intersection label to reinforce visibility
    const midX = (centerA.X() + centerB.X()) / 2;
    const midY = centerA.Y();
    board.create('text', [midX, midY, 'A ∩ B'], {
      anchorX: 'middle', anchorY: 'middle', fontSize: 14, fixed: true,
      cssClass: 'intersection-label'
    });

    // Pool area visual guide (simple dashed rectangle)
    const p1 = board.create('point', [-7.5, -3.2], { visible: false, fixed: true });
    const p2 = board.create('point', [7.5, -3.2], { visible: false, fixed: true });
    const p3 = board.create('point', [7.5, -1.8], { visible: false, fixed: true });
    const p4 = board.create('point', [-7.5, -1.8], { visible: false, fixed: true });
    const pool = board.create('polygon', [p1, p2, p3, p4], {
      borders: { strokeColor: '#999', dash: 2 },
      hasInnerPoints: true,
      fillOpacity: 0.03,
      withLines: true,
    });
    board.create('text', [-7.3, -1.95, 'Element Pool'], { anchorX: 'left', anchorY: 'top', fixed: true, cssClass: 'muted' });
  }

  /** Generate sets with union size = 7 and |A∩B| >= 2 **/
  function generateSets() {
    const universe = Array.from({ length: 20 }, (_, i) => i + 1);
    let k, a, b;
    for (let attempts = 0; attempts < 20; attempts++) {
      k = randint(2, 3); // intersection size
      a = randint(1, 3); // A-only size
      b = 7 - k - a;     // B-only size so union size = 7
      if (b >= 1 && b <= 3) break;
    }

    const inter = sample(universe, k);
    const rest1 = arrayDiff(universe, inter);
    const aOnly = sample(rest1, a);
    const rest2 = arrayDiff(rest1, aOnly);
    const bOnly = sample(rest2, b);

    setA = arrayUnion(inter, aOnly).sort((x, y) => x - y);
    setB = arrayUnion(inter, bOnly).sort((x, y) => x - y);

    return { inter, aOnly, bOnly };
  }

  function regionForValue(v, inter, aOnly, bOnly) {
    if (inter.includes(v)) return 'AB';
    if (aOnly.includes(v)) return 'A';
    if (bOnly.includes(v)) return 'B';
    return 'OUT';
  }

  function insideCircle(pt, ctr, r) {
    const dx = pt.X() - ctr.X();
    const dy = pt.Y() - ctr.Y();
    return Math.sqrt(dx * dx + dy * dy) <= r - 1e-6;
  }

  function currentRegionForPoint(pt) {
    const inA = insideCircle(pt, centerA, radius);
    const inB = insideCircle(pt, centerB, radius);
    if (inA && inB) return 'AB';
    if (inA) return 'A';
    if (inB) return 'B';
    return 'OUT';
  }

  function renderSetDefinitions() {
    const setATex = `A = \\{ ${setA.join(', ')} \\}`;
    const setBTex = `B = \\{ ${setB.join(', ')} \\}`;
    document.getElementById('setA').textContent = '';
    document.getElementById('setB').textContent = '';
    document.getElementById('setA').innerHTML = `$$${setATex}$$`;
    document.getElementById('setB').innerHTML = `$$${setBTex}$$`;
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }

  function clearTokens() {
    tokens.forEach(t => {
      try { board.removeObject(t.point); } catch (e) {}
    });
    tokens = [];
  }

  function createTokens(values) {
    clearTokens();
    // Distribute tokens in the pool area
    const startX = -7;
    const gap = 2.2;
    const y = -2.5;
    values.forEach((v, i) => {
      const x = startX + (i * gap);
      const pt = board.create('point', [x, y], {
        name: String(v),
        withLabel: true,
        fixed: false,
        size: 4,
        strokeColor: COLORS.TOKEN,
        fillColor: '#ffffff',
        highlightStrokeColor: COLORS.TOKEN,
        highlightFillColor: '#f3f4f6',
        label: { offset: [-6, -6], fontSize: 16 }
      });
      // Keep tokens above circles visually
      pt.setAttribute({ layer: 10 });
      tokens.push({ value: v, point: pt, correct: 'OUT' });
    });
  }

  function resetProblem() {
    const { inter, aOnly, bOnly } = generateSets();
    renderSetDefinitions();
    const union = arrayUnion(arrayUnion(inter, aOnly), bOnly).sort((x, y) => x - y);
    createTokens(union);
    // Annotate each token with its correct region
    tokens.forEach(t => { t.correct = regionForValue(t.value, inter, aOnly, bOnly); });
    setFeedback('New sets generated. Place the tokens into A, B, or A ∩ B.');
    // Reset coloring
    tokens.forEach(t => t.point.setAttribute({ strokeColor: COLORS.TOKEN }));
  }

  function evaluate() {
    let correct = 0;
    let wrong = 0;
    const mistakes = [];
    tokens.forEach(t => {
      const region = currentRegionForPoint(t.point);
      const good = region === t.correct;
      if (good) {
        correct++;
        t.point.setAttribute({ strokeColor: COLORS.OK });
      } else {
        wrong++;
        t.point.setAttribute({ strokeColor: COLORS.ERR });
        mistakes.push({ value: t.value, placed: region, expected: t.correct });
      }
    });

    let html = '';
    html += `<p><strong>Score:</strong> ${correct} / ${tokens.length}</p>`;
    if (mistakes.length === 0) {
      html += `<p class="ok">Great job! All placements are correct.</p>`;
    } else {
      html += `<p class="err">Review the items below:</p>`;
      html += '<ul>';
      mistakes.forEach(m => {
        const human = r => ({ A: 'A only', B: 'B only', AB: 'A ∩ B', OUT: 'outside' }[r]);
        html += `<li>${m.value}: placed in <em>${human(m.placed)}</em>, expected <em>${human(m.expected)}</em></li>`;
      });
      html += '</ul>';
      html += '<p>Tip: A ∩ B must satisfy both set definitions.</p>';
    }
    setFeedback(html);
  }

  function setFeedback(html) {
    document.getElementById('feedback').innerHTML = html;
  }

  /** Wire up and bootstrap **/
  function main() {
    initBoard();
    resetProblem();
    document.getElementById('evaluateBtn').addEventListener('click', evaluate);
    document.getElementById('resetBtn').addEventListener('click', () => {
      // Full reset: re-init board to clear any potential artifacts
      initBoard();
      resetProblem();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
  } else {
    main();
  }
})();
