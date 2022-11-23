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

let ageMore5 = [...students];

ageMore5.map(function (student) {
  return student.age + 5;
});

ageMore5.push(newStudent("Logan", 14));

console.log(ageMore5);
console.log(students);
