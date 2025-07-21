let drops = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("slime-container"); // Esta línea hace que se muestre en tu HTML
  noStroke();
  for (let i = 0; i < 60; i++) {
    drops.push(new SlimeDrop());
  }
}

function draw() {
  clear(); // Para que el fondo no tape nada
  for (let drop of drops) {
    drop.update();
    drop.display();
  }
}

class SlimeDrop {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(width);
    this.y = random(-height, 0);
    this.size = random(20, 60);
    this.speed = random(1, 4);
    this.wiggle = random(0.5, 2);
  }

  update() {
    this.y += this.speed;
    if (this.y > height + this.size) {
      this.reset();
    }
  }

  display() {
    fill(255, 0, 0, 200);
    beginShape();
    let dripWidth = this.size / 2;
    vertex(this.x - dripWidth, this.y);
    bezierVertex(
      this.x - dripWidth / 1.5, this.y + this.size / 2,
      this.x + dripWidth / 1.5, this.y + this.size / 2,
      this.x + dripWidth, this.y
    );
    bezierVertex(
      this.x + dripWidth / 1.5, this.y + this.size,
      this.x - dripWidth / 1.5, this.y + this.size,
      this.x - dripWidth, this.y
    );
    endShape(CLOSE);
  }
}