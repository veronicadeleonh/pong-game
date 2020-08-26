class Player {
  constructor() {
    this.width = 15;
    this.height = 120;

    this.x = this.width * 2;
    this.y = height / 2 - this.height / 2;

    this.acc = 0;
    this.speed = 5;
    this.maxSpeed = 15;

    this.score = 0;
  }

  drawPlayer() {
    noStroke();
    fill("#08B008");
    rect(this.x, this.y, this.width, this.height);
  }

  moveUp() {
    this.acc -= this.speed;
    // console.log(this.speed);
  }

  moveDown() {
    this.acc += this.speed;
  }

  stopMov() {
    this.acc === 0;
  }

  playerEase() {
    this.acc = constrain(this.acc, -this.maxSpeed, this.maxSpeed);
    this.y += this.acc;
    this.y = constrain(this.y, 0, height - this.height);
  }
}
