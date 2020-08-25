const game = new Game();

function setup() {
  createCanvas(800, 600);
  //canvas.parent("canvas");
  background("#020314");
  game.setupGame();
}

function draw() {
  clear();
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
