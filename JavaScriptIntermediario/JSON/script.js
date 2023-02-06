let a = {
  nome: "Tobias",
  nota: 10,
};

console.log(a);

// JavaScript Object notation - forma de representar um objeto javascript
let b = JSON.stringify(a);
console.log(b);

let a2 = '{"nome": "Ana", "nota":9}'

let b2 = JSON.parse(a2);

console.log(a2);
console.log(b2);
