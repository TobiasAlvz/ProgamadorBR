let media = function () {
  return (this.notas[0] + this.notas[1]) / 2;
};

let aluno1 = { nome: "Igor", notas: [10, 5], media };
let aluno2 = { nome: "Tobias", notas: [8, 6], media };
let alunos = [aluno1, aluno2];

console.log(aluno1.media());
