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

// Aqui o array original não é modificado.
const ageMore5 = students.map(function (student) {
  return student.age + 5;
});

// Aqui o array foi modificado
const ageMore5Two = students.map(function (student) {
  student.age += 5;
  return student;
});
console.log(ageMore5);
console.log(ageMore5Two);
