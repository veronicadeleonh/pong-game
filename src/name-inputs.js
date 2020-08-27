//DOM assignments for inputs

document.querySelector(".lets-play-btn").onclick = (event) => {
  hidden = false;
  document.querySelector("canvas").style.visibility = "visible";
  document.querySelector(".input-player-1").style.visibility = "hidden";
  document.querySelector(".input-player-2").style.visibility = "hidden";
  document.querySelector(".lets-play-btn").style.visibility = "hidden";
  document.querySelector(".name-player-1").innerHTML = document.querySelector(
    ".input-player-1"
  ).value;
  document.querySelector(".name-player-2").innerHTML = document.querySelector(
    ".input-player-2"
  ).value;
};
