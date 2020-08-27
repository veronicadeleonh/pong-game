class Start {
  constructor() {}

  setupStart() {}

  setInput() {}

  drawStart() {
    textFont(pxlfont);
    textAlign(CENTER);
    textSize(18);
    fill("#B2B2B2");
    text("Player 1", width / 2, 120);
    textSize(18);
    fill(255);
    text("Use W key and S key\nto move UP and DOWN", width / 2, 170);
    fill("#B2B2B2");
    text("Player 2", width / 2, 270);
    textSize(18);
    fill(255);
    text("Use UP ARROW\nand DOWN ARROW\nto move UP and DOWN", width / 2, 320);
    textSize(24);
    fill(255);
    text("Press ENTER to start", width / 2, 500);
  }

  drawGameOver() {
    background("#020314");

    let player1Name = document.querySelector(".input-player-1").value;
    let player2Name = document.querySelector(".input-player-2").value;

    if (game.player1.score > game.player2.score) {
      textFont(pxlfont);
      textAlign(CENTER);
      textSize(35);
      text(`${player1Name} WON!`, width / 2, 250);
      textSize(20);
      text(
        `Press R to Restart match\nor press S to Start again`,
        width / 2,
        500
      );
    } else {
      textFont(pxlfont, 20);
      textAlign(CENTER);
      textSize(35);
      text(`${player2Name} WON!`, width / 2, 250);
      textSize(20);
      text(
        `Press R to Restart match\nor press S to Start again`,
        width / 2,
        500
      );
    }
    fill(255);
  }
}
