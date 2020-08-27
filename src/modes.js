class Start {
  constructor() {}

  setupStart() {}

  setInput() {}

  drawStart() {
    textFont(pxlfont, 20);
    textAlign(CENTER);
    text("Press ENTER to start", width / 2, height / 2);
    fill(255);
  }

  drawGameOver() {
    background(0, 102, 153);

    let player1Name = document.querySelector(".input-player-1").value;
    let player2Name = document.querySelector(".input-player-2").value;

    if (game.player1.score > game.player2.score) {
      textFont(pxlfont);
      textAlign(CENTER);
      text(
        `${player1Name} won. Press R to Restart a match.\nPress S to Start again`,
        width / 2,
        height / 2
      );
    } else {
      textFont(pxlfont);
      textAlign(CENTER);
      text(
        `${player2Name} won. Press R to Restart a match.\nPress S to Start again`,
        width / 2,
        height / 2
      );
    }
    fill(255);
  }
}
