//DOM assignments for inputs

// document.querySelector(".input-player-1").onchange = (e) => {
//   // console.log(e.target.value);
//   document.querySelector(".name-player-1").innerHTML = e.target.value;
// };

// document.querySelector(".input-player-2").onchange = (e) => {
//   // console.log(e.target.value);
//   document.querySelector(".name-player-2").innerHTML = e.target.value;
// };
const namePlayer1 = document.querySelector(".input-player-1").value;
const namePlayer2 = document.querySelector(".input-player-2").value;

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
