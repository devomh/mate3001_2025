/* Interactive Venn Diagram using p5.js + MathJax */

const COLORS = {
  A: '#007cba',
  B: '#28a745',
  AB: '#8a2be2',
  TOKEN: '#374151',
  OK: '#059669',
  ERR: '#dc2626',
  BG: '#ffffff'
};

let canvas, holder, lensG;
let W = 900, H = 600; // base canvas size (fits holder aspect 3:2)

// Circle geometry (in pixels)
const radius = 150;
let centerA = { x: 350, y: 280 };
let centerB = { x: 550, y: 280 };

// Sets and tokens
let setA = [], setB = [];
let tokens = []; // { value, x, y, r, dragging, dx, dy, stroke }

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

function sample(arr, k) { return shuffle(arr).slice(0, k); }
function union(a, b) { return Array.from(new Set([...a, ...b])); }
function diff(a, b) { const s = new Set(b); return a.filter(x => !s.has(x)); }

function generateSets() {
  const U = Array.from({ length: 20 }, (_, i) => i + 1);
  let k, a, b;
  for (let attempts = 0; attempts < 20; attempts++) {
    k = randint(2, 3); // intersection size
    a = randint(1, 3); // A-only size
    b = 7 - k - a;     // B-only size so union size = 7
    if (b >= 1 && b <= 3) break;
  }
  const inter = sample(U, k);
  const rest1 = diff(U, inter);
  const aOnly = sample(rest1, a);
  const rest2 = diff(rest1, aOnly);
  const bOnly = sample(rest2, b);

  setA = union(inter, aOnly).sort((x, y) => x - y);
  setB = union(inter, bOnly).sort((x, y) => x - y);
  return { inter, aOnly, bOnly };
}

function regionForValue(v, inter, aOnly, bOnly) {
  if (inter.includes(v)) return 'AB';
  if (aOnly.includes(v)) return 'A';
  if (bOnly.includes(v)) return 'B';
  return 'OUT';
}

function inCircle(px, py, cx, cy, r) {
  const dx = px - cx, dy = py - cy;
  return Math.sqrt(dx*dx + dy*dy) <= r - 0.1;
}

function regionAt(x, y) {
  const inA = inCircle(x, y, centerA.x, centerA.y, radius);
  const inB = inCircle(x, y, centerB.x, centerB.y, radius);
  if (inA && inB) return 'AB';
  if (inA) return 'A';
  if (inB) return 'B';
  return 'OUT';
}

function renderSetDefinitions() {
  const setATex = `A = \\{ ${setA.join(', ')} \\}`;
  const setBTex = `B = \\{ ${setB.join(', ')} \\}`;
  document.getElementById('setA').innerHTML = `$$${setATex}$$`;
  document.getElementById('setB').innerHTML = `$$${setBTex}$$`;
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

function createTokens(values, correctRegions) {
  tokens = [];
  const startX = 120;
  const gap = 100;
  const y = 520;
  values.forEach((v, i) => {
    const t = {
      value: v,
      x: startX + i * gap,
      y,
      r: 20,
      dragging: false,
      dx: 0,
      dy: 0,
      stroke: COLORS.TOKEN,
      correct: correctRegions[v]
    };
    tokens.push(t);
  });
}

function resetProblem() {
  const { inter, aOnly, bOnly } = generateSets();
  renderSetDefinitions();
  const unionVals = union(union(inter, aOnly), bOnly).sort((x, y) => x - y);
  const correctRegions = {};
  unionVals.forEach(v => { correctRegions[v] = regionForValue(v, inter, aOnly, bOnly); });
  createTokens(unionVals, correctRegions);
  setFeedback('New sets generated. Place the tokens into A, B, or A ∩ B.');
}

function evaluate() {
  let correct = 0;
  let wrong = 0;
  const mistakes = [];
  tokens.forEach(t => {
    const reg = regionAt(t.x, t.y);
    const good = reg === t.correct;
    if (good) {
      correct++;
      t.stroke = COLORS.OK;
    } else {
      wrong++;
      t.stroke = COLORS.ERR;
      mistakes.push({ value: t.value, placed: reg, expected: t.correct });
    }
  });

  let html = `<p><strong>Score:</strong> ${correct} / ${tokens.length}</p>`;
  if (mistakes.length === 0) {
    html += `<p class="ok">Great job! All placements are correct.</p>`;
  } else {
    html += `<p class="err">Review the items below:</p>`;
    html += '<ul>';
    const human = r => ({ A: 'A only', B: 'B only', AB: 'A ∩ B', OUT: 'outside' }[r]);
    mistakes.forEach(m => {
      html += `<li>${m.value}: placed in <em>${human(m.placed)}</em>, expected <em>${human(m.expected)}</em></li>`;
    });
    html += '</ul>';
  }
  setFeedback(html);
}

function setFeedback(html) {
  document.getElementById('feedback').innerHTML = html;
}

// p5.js setup & draw
function setup() {
  holder = document.getElementById('canvas-holder');
  // Create canvas at the holder's size (CSS defines aspect ratio)
  const rect = holder.getBoundingClientRect();
  W = Math.floor(rect.width);
  H = Math.floor(rect.height);
  canvas = createCanvas(W, H);
  canvas.parent('canvas-holder');
  pixelDensity(1);
  // Offscreen graphics for purple intersection lens
  lensG = createGraphics(W, H);
  lensG.pixelDensity(1);
  textAlign(CENTER, CENTER);
  textSize(16);
  resetProblem();

  document.getElementById('evaluateBtn').addEventListener('click', evaluate);
  document.getElementById('resetBtn').addEventListener('click', resetProblem);
}

function windowResized() {
  const rect = holder.getBoundingClientRect();
  W = Math.floor(rect.width);
  H = Math.floor(rect.height);
  resizeCanvas(W, H);
  lensG = createGraphics(W, H);
  lensG.pixelDensity(1);
}

function draw() {
  background(COLORS.BG);

  // Draw circles with alpha so base regions visible
  noStroke();
  fill(colorFromHex(COLORS.A, 56)); // ~0.22 opacity (56/255)
  circle(centerA.x, centerA.y, radius * 2);
  fill(colorFromHex(COLORS.B, 56));
  circle(centerB.x, centerB.y, radius * 2);

  // Compute and render purple intersection lens using compositing
  lensG.clear();
  lensG.noStroke();
  lensG.fill(colorFromHex(COLORS.AB, 140)); // stronger alpha for clarity
  lensG.circle(centerA.x, centerA.y, radius * 2);
  lensG.drawingContext.globalCompositeOperation = 'destination-in';
  lensG.circle(centerB.x, centerB.y, radius * 2);
  lensG.drawingContext.globalCompositeOperation = 'source-over';
  image(lensG, 0, 0);

  // Outlines on top
  noFill();
  strokeWeight(3);
  stroke(COLORS.A);
  circle(centerA.x, centerA.y, radius * 2);
  stroke(COLORS.B);
  circle(centerB.x, centerB.y, radius * 2);

  // Labels
  noStroke();
  fill('#111');
  textSize(18);
  text('A', centerA.x - radius + 10, centerA.y - radius - 8);
  text('B', centerB.x + radius - 10, centerB.y - radius - 8);
  textSize(14);
  text('A ∩ B', (centerA.x + centerB.x)/2, centerA.y);

  // Tokens
  tokens.forEach(t => {
    stroke(t.stroke);
    fill('#fff');
    strokeWeight(2);
    circle(t.x, t.y, t.r * 2);
    noStroke();
    fill('#111');
    textSize(16);
    text(String(t.value), t.x, t.y);
  });
}

// Mouse/touch interactions
function mousePressed() {
  // translate mouse to canvas coordinates already in p5
  for (let i = tokens.length - 1; i >= 0; i--) {
    const t = tokens[i];
    if (dist(mouseX, mouseY, t.x, t.y) <= t.r) {
      t.dragging = true;
      t.dx = mouseX - t.x;
      t.dy = mouseY - t.y;
      // bring to front by moving to end
      tokens.splice(i, 1);
      tokens.push(t);
      break;
    }
  }
}

function mouseDragged() {
  tokens.forEach(t => {
    if (t.dragging) {
      t.x = mouseX - t.dx;
      t.y = mouseY - t.dy;
    }
  });
}

function mouseReleased() {
  tokens.forEach(t => { t.dragging = false; });
}

// Helpers
function colorFromHex(hex, alpha255) {
  // hex like #RRGGBB
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return color(r, g, b, alpha255);
}
