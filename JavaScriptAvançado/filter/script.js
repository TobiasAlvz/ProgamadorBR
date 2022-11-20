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
let student = newStudent("Luiz", 15);
students.push(student);

let temMaiseDe10 = (student) => {
  return student.age > 10;
};

let temMenosDe10 = (student) => {
  return student.age < 10;
};

const tem10 = students.filter(function (student) {
  return student.age === 10;
});

console.log(students.filter(temMaiseDe10));
console.log(students.filter(temMenosDe10));
console.log(tem10);
