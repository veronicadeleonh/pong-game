const game = new Game();
let mode = 0;

function setup() {
  createCanvas(800, 600);
  //canvas.parent("canvas");
  //   background(255);
  game.setupGame();
}

function draw() {
  clear();
  if (mode == 0) {
    text("Press ENTER to start", 50, 50);
    fill(255);
  }

  if (mode == 1) {
    game.drawGame();

    if (keyIsDown(87)) {
      game.player1.moveUp();
      // console.log("jello");
    }
    if (keyIsDown(83)) {
      game.player1.moveDown();
    }
    if (keyIsDown(38)) {
      game.player2.moveUp();
      // console.log("jello");
    }
    if (keyIsDown(40)) {
      game.player2.moveDown();
    }
  }
}

function keyPressed() {
  if (keyCode === 13) {
    mode = 1;
  }
}
