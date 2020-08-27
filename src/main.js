const game = new Game();
const start = new Start();

let mode = 0;
let hidden = true;
let pxlfont;

function preload() {
  pxlfont = loadFont("assets/pixelfont.ttf");
  interPlsong = loadSound("assets/interplanetary.mp3");
}

function setup() {
  // interPlsong.loop();
  createCanvas(800, 600);
  background("#020314");
  start.setupStart();
  game.setupGame();
}

function draw() {
  clear();
  if (hidden) {
    document.querySelector("canvas").style.visibility = "hidden";
  }

  // Start page
  else {
    if (mode == 0) {
      start.drawStart();
    }

    // Game
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

    // Game over
    if (mode == 2) {
      //  interPlsong.stop();
      start.drawGameOver();
    }
  }
}

function keyPressed() {
  if (keyCode === 13) {
    mode = 1;
  }
  if (keyCode === 82 && mode == 2) {
    mode = 1;
    game.setupGame();
  }
  if (keyCode === 83 && mode == 2) {
    let nameStr = "";

    document.querySelector("canvas").style.visibility = "hidden";
    document.querySelector(".lets-play-btn").style.visibility = "visible";
    document.querySelector(".input-player-1").style.visibility = "visible";
    document.querySelector(".input-player-2").style.visibility = "visible";
    document.querySelector(".input-player-1").value = nameStr;
    document.querySelector(".input-player-1").value = nameStr;
  }
}
