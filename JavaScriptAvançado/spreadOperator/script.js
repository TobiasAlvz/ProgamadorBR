let people = {
  name: "Igor",
};

let contact = {
  phone: 1233123,
};

const count = { ...people, ...contact };

console.log(count);

const turmaA = ["Douglas", "Wilson", "Marcos"];

const turmaB = ["Lucas", "Pedro", "Igor"];

const turmaC = [...turmaA, ...turmaB];

console.log(turmaC);
