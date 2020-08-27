class Start {
  constructor() {}
  setupStart() {}
  setInput() {}
  drawStart() {
    text("PRESS ENTER TO START", width / 2, height / 2);
    fill(255);
  }
  drawGameOver() {
    background(0, 102, 153);

    let player1Name = document.querySelector(".input-player-1").value;
    let player2Name = document.querySelector(".input-player-2").value;

    if (game.player1.score > game.player2.score) {
      text(`${player1Name} won. Press R to Restart`, width / 2, height / 2);
    } else {
      text(`${player2Name} won. Press R to Restart`, width / 2, height / 2);
    }
    fill(255);
  }
}
