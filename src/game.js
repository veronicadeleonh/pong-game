class Game {
  constructor() {}

  drawBoard() {
    stroke("rgba(255,255,255,0.15)");
    strokeWeight(3);
    line(width / 2, height - 20, width / 2, 20);

    fill("rgba(255,255,255,0)");
    stroke("rgba(255,255,255,0.15)");
    strokeWeight(3);
    ellipse(width / 2, height / 2, 80);
  }

  setupGame() {
    this.player1 = new Player("#08B008");

    this.player2 = new Player("#D39D12");
    this.player2.x = width - this.player2.width * 3;

    this.ball = new Ball();
  }

  drawGame() {
    this.player1.drawPlayer();
    this.player2.drawPlayer();

    this.ball.drawBall();
    this.ball.moveBall();
    this.ball.scoreGame();
    this.ball.collisionWithPaddle();
    this.ball.playerWins();

    this.drawBoard();

    // DOM assignments
    document.querySelector(".score-player-1").innerText = this.player1.score;
    document.querySelector(".score-player-2").innerText = this.player2.score;
  }
}
