class Game {
  constructor() {}

  drawLine() {
    stroke("rgba(255,255,255,0.15)");
    strokeWeight(3);
    line(width / 2, height - 20, width / 2, 20);
  }

  setupGame() {
    this.player1 = new Player();

    this.player2 = new Player();
    this.player2.x = width - this.player2.width * 3;

    this.ball = new Ball();
  }

  drawGame() {
    this.player1.drawPlayer();
    this.player2.drawPlayer();

    this.player1.playerEase();
    this.player2.playerEase();

    this.ball.drawBall();
    this.ball.moveBall();
    this.ball.bounceBall();
    // this.ball.paddleCollision();

    this.drawLine();
  }
}
