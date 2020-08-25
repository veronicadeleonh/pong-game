class Ball {
  constructor() {
    this.radius = 10;

    this.x = width / 2;
    this.y = height / 2;

    this.newX = (Math.random() * width) / 70;
    this.newY = (Math.random() * width) / 70;
  }

  drawBall() {
    fill("#FFEB3C");
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
  }

  moveBall() {
    this.x += this.newX;
    this.y += this.newY;

    // let oneOrZero = Math.random() > 0.5 ? 1 : 0;
    // if (oneOrZero === 1) {
    //   this.x += this.newX;
    //   this.y += this.newY;
    // } else {
    //   this.x -= this.newX;
    //   this.y -= this.newY;
    // }
  }

  bounceBall() {}
}
