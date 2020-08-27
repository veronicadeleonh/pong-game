// DOM starting inputs

document.querySelector("#player1").onchange = (e) => {
  // console.log(e.target.value);
  document.querySelector(".name-player-1").innerHTML = e.target.value;
};

document.querySelector("#player2").onchange = (e) => {
  // console.log(e.target.value);
  document.querySelector(".name-player-2").innerHTML = e.target.value;
};

document.querySelector(".lets-play-btn").onclick = (e) => {
  hidden = false;
  document.querySelector("canvas").style.visibility = "visible";
  document.querySelector(".lets-play-btn").style.visibility = "hidden";
};
