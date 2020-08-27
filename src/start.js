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
    text("GAME OVER - Press R to try again", width / 2, height / 2);
    fill(255);
  }
}
