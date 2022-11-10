let list = document.getElementById("list");
let num = parseInt(list.getAttribute("num"));

let container = "";

for (let i = 0; i < num; i++) {
  container += "<li>" + i + "</li>";
}

list.innerHTML = container;
