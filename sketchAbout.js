let particles = [];
let font;

function preload() {
  font = loadFont('https://cdn.jsdelivr.net/npm/@fontsource/raleway/files/raleway-latin-400-normal.woff');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(120); // MÁS PEQUEÑO que antes (era 200)
  textAlign(CENTER, CENTER);

  // Ajustar posición para que aparezca justo debajo de la barra
  let yOffset = 180; // puedes ajustar este número si quieres que esté más arriba o más abajo

  let points = font.textToPoints('About Me', width / 2 - 260, yOffset, 120, {
    sampleFactor: 0.2
  });

  for (let pt of points) {
    particles.push({
      x: pt.x,
      y: pt.y,
      origX: pt.x,
      origY: pt.y,
      vx: random(-1, 1),
      vy: random(-1, 1)
    });
  }
}

function draw() {
  background(0);
  noStroke();
  fill(255, 0, 0);

  for (let p of particles) {
    let dx = p.origX - p.x;
    let dy = p.origY - p.y;
    p.vx += dx * 0.001;
    p.vy += dy * 0.001;
    p.vx *= 0.95;
    p.vy *= 0.95;
    p.x += p.vx;
    p.y += p.vy;

    ellipse(p.x, p.y, 2);
  }
}