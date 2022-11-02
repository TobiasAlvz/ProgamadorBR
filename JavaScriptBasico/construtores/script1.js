function aluno(nome, n1, n2) {
  this.nome = nome;
  this.n1 = n1;
  this.n2 = n2;
  this.media = function () {
    return (this.n1 + this.n2) / 2;
  };
}

let aluno1 = new aluno("Tobias", 9, 8);
let aluno2 = new aluno("Tobias", 9, 8);

console.log(aluno1, aluno1.media());
