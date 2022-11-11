let player = document.getElementById("player");

let xIN = 0;
let yIN = 0;

function movePlayer(x, y) {
  let posX = x + "px";
  let posY = y + "px";

  player.style.top = posX;
  player.style.left = posY;
}

setInterval(function () {
  movePlayer(xIN++, yIN++);
}, 10);
