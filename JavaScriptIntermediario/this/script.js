let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");

h1.onclick = colocarMaisculo;
h2.onclick = colocarMaisculo;

function colocarMaisculo() {
  this.innerHTML = this.innerHTML.toUpperCase();
}
