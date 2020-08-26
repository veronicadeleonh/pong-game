class Player {
  constructor() {
    this.width = 15;
    this.height = 120;

    this.x = this.width * 2;
    this.y = height / 2 - this.height / 2;

    this.score = 0;
  }

  drawPlayer() {
    noStroke();
    fill("#08B008");
    rect(this.x, this.y, this.width, this.height);
  }

  moveUp() {
    if (this.y > 0) {
      this.y -= 10;
    }
  }

  moveDown() {
    if (this.y < height - this.height) {
      this.y += 10;
      // console.log(this.y);
    }
  }
}
