let list = document.getElementById("list");
list.dataset.num = "10";
let num = parseInt(list.dataset.num);

let id = parseInt(list.dataset.id);
console.log(id);

console.log(num);
let container = "";

for (let i = 0; i < num; i++) {
  container += "<li>" + i + "</li>";
}

list.innerHTML = container;
