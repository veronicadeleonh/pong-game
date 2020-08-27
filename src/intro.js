// DOM assignments for inputs

document.querySelector(".input-player-1").onchange = (e) => {
  // console.log(e.target.value);
  document.querySelector(".name-player-1").innerHTML = e.target.value;
};

document.querySelector(".input-player-2").onchange = (e) => {
  // console.log(e.target.value);
  document.querySelector(".name-player-2").innerHTML = e.target.value;
};

document.querySelector(".lets-play-btn").onclick = (e) => {
  hidden = false;
  document.querySelector("canvas").style.visibility = "visible";
  document.querySelector(".input-player-1").style.visibility = "hidden";
  document.querySelector(".input-player-2").style.visibility = "hidden";
  document.querySelector(".lets-play-btn").style.visibility = "hidden";
};
