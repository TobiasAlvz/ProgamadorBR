let people = {
  name: "Igor",
  phone: 1233123,
  status: "Solteiro",
  cidade: "Tavares",
};

let people1 = {
  name: "Pedro",
  phone: 5454,
  status: "Casado",
  cidade: "Tavares",
};

let { ...copia } = people;

copia.name = "João";

console.log(copia);
console.log(people);

const turmaA = ["Douglas", "Wilson", "Marcos"];

const turmaB = ["Lucas", "Pedro", "Igor"];

const turmaC = [...turmaA, ...turmaB];

// console.log(turmaC);
