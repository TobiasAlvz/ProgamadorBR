const nome = "";

try {
  if (nome.length == 0) {
    throw new Error("nome vazio");
  }
  console.log(nome);
} catch (error) {
  console.log("Ocorreu um erro", error);
}

console.log("Oi");
