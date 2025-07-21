const s1 = (p) => {
  let notes = [];

  p.setup = () => {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent("sketch-container-1");
    for (let i = 0; i < 40; i++) {
      notes.push(new Note(p.random(p.width), p.random(p.height)));
    }
  };

  p.draw = () => {
    p.clear();
    for (let n of notes) {
      n.update();
      n.show();
    }
  };

  class Note {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.speed = p.random(1, 2);
    }

    update() {
      this.y -= this.speed;
      if (this.y < -20) this.y = p.height + 20;
    }

    show() {
      p.fill(255, 0, 0);
      p.textSize(24);
      p.text("♪", this.x, this.y);
    }
  }
};

new p5(s1);