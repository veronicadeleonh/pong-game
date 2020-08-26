class Ball {
  constructor() {
    this.radius = 10;

    this.x = width / 2;
    this.y = height / 2;

    this.velocityX = (Math.random() * width) / 70;
    this.velocityY = (Math.random() * width) / 70;
  }

  drawBall() {
    fill("#FFEB3C");
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
  }

  moveBall() {
    this.x -= this.velocityX;
    this.y -= this.velocityY;

    // randomize the initial ball direction

    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.velocityY = -this.velocityY;
    }
  }

  bounceBall() {
    if (this.x < this.radius || this.x > width - this.radius) {
      this.newX *= -1;
    }
    if (this.y < this.radius || this.y > height - this.radius) {
      this.newY *= -1;
    }
  }
}
