// Isso é um construtor de aluno.
function criarAluno(nome, n1, n2) {
  let aluno = {
    nome: nome,
    nota1: n1,
    nota2: n2,
    media: function () {
      return (this.nota1 + this.nota2) / 2;
    },
  };
  return aluno;
}

let turma = [
  criarAluno("Tobias", 7, 9),
  criarAluno("Igor", 10, 10),
  criarAluno("Sand", 7, 9),
  criarAluno("Luck", 10, 10),
];

turma.forEach(function (element) {
  console.log(element);
});
