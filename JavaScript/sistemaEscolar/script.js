let alunos = ["Tobias", "Gabriel", "Ana"];
let notaA = [10, 7, 8];
let notaB = [9, 6, 7];

let media = function (nota1, nota2) {
  return (nota1 + nota2) / 2;
};

let situacao = function (media) {
  if (media >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
};
for (let index in alunos) {
  let nota1 = notaA[index];
  let nota2 = notaB[index];
  let m = media(nota1, nota2);
  const element = alunos[index];
  console.log(
    `Aluno ${element} -> nota1 - ${nota1} -> nota2 - ${
      notaB[index]
    } -> media - ${media(nota1, nota2)} -> situação - ${situacao(m)}`
  );
}
