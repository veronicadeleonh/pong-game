class Ball {
  constructor() {
    this.radius = 10;

    this.x = width / 2;
    this.y = height / 2;

    this.speedX = (Math.random() * width) / 70;
    this.speedY = (Math.random() * width) / 70;
  }

  drawBall() {
    fill("#FFEB3C");
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
  }

  moveBall() {
    this.x += this.speedX;
    this.y += this.speedY;

    // ball hits top border || ball his bottom border
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.speedY *= -1;
    }
  }

  collisionWithPaddle() {
    if (
      this.y > game.player1.y &&
      this.y < game.player1.y + game.player1.height &&
      this.x - this.radius - game.player1.width <= game.player1.x
    ) {
      this.speedX *= -1;
    }
    if (
      this.y > game.player2.y &&
      this.y < game.player2.y + game.player2.height &&
      this.x + this.radius >= game.player2.x
    ) {
      this.speedX *= -1;
    }
  }

  resetBall() {
    this.x = width / 2;
    this.y = height / 2;

    this.speedX = (Math.random() * width) / 70;
    this.speedY = (Math.random() * width) / 70;
  }

  stopBall() {
    this.speedX = 0;
    this.speedY = 0;
  }

  scoreGame() {
    if (this.x - this.radius * 2 > width) {
      this.resetBall();
      game.player1.score += 50;
      game.player2.score -= 50;
    }
    if (this.x + this.radius * 2 < 0) {
      this.resetBall();
      game.player2.score += 50;
      game.player1.score -= 50;
    }
  }

  playerWins() {
    if (game.player1.score === 1500 || game.player2.score === 1500) {
      this.stopBall();
    }
  }
}
