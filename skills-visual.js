let waveRings = [];
let t = 0;
let offsetY = 0;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("skills-visual-bg");
  noFill();
  textAlign(CENTER, CENTER);
  textSize(200);
  frameRate(60);

  // ✅ Calculamos la posición inicial de la sección de skills
  let offsetElement = document.querySelector(".skills-section");
  if (offsetElement) {
    offsetY = offsetElement.offsetTop + 300;
  }
}

function draw() {
  clear();
  translate(width / 2, offsetY);

  // 🎵 Nota musical
  push();
  let pulse = sin(t * 2) * 10;
  fill(255, 0, 0, 120);
  textSize(180 + pulse);
  text('🎵', 0, 0);
  pop();

  // 🌊 Soundwaves
  if (frameCount % 10 === 0) {
    waveRings.push(new WaveRing());
  }

  for (let i = waveRings.length - 1; i >= 0; i--) {
    waveRings[i].update();
    waveRings[i].display();
    if (waveRings[i].finished()) {
      waveRings.splice(i, 1);
    }
  }

  t += 0.03;
}

class WaveRing {
  constructor() {
    this.radius = 60;
    this.alpha = 200;
    this.weight = 2;
  }

  update() {
    this.radius += 4;
    this.alpha -= 3;
    this.weight = map(this.alpha, 200, 0, 2, 6);
  }

  display() {
    stroke(255, 0, 0, this.alpha);
    strokeWeight(this.weight);
    ellipse(0, 0, this.radius * 2);
  }

  finished() {
    return this.alpha <= 0;
  }
}