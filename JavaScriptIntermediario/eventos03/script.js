let h1 = document.getElementById("h1");

h1.addEventListener("click", onClick);
h1.addEventListener("mouseenter", mouseEnter);
h1.addEventListener("mouseout", mouseOut);

function onClick() {
  this.innerHTML = "Novo Texto";
}

function mouseEnter() {
  this.innerHTML = "O mouse entrou";
}

function mouseOut() {
  this.innerHTML = "O mouse saiu";
}
