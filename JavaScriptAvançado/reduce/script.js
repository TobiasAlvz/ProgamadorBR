const newStudent = (name, age) => {
  let student = { name: name, age: age };
  return student;
};

const students = [
  { name: "Douglas", age: 10 },
  { name: "Maria", age: 12 },
  { name: "Wilson", age: 8 },
  { name: "Leandro", age: 7 },
  { name: "José", age: 11 },
  newStudent("Marcio", 10),
];

// O reduce vai pegar todo o array e vai tranformar em um só resultado.
const ageTotal = students.reduce((acumulador, student) => {
  return acumulador + student.age;
}, 0);

console.log(ageTotal);
