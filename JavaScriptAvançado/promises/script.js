const users = ["José", "Maria", "Pedro", "João"];

function insertUsers(name) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(name);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject({ msg: "Erro" });
      }
    }, 1000);
  });
  return promise;
}

function listUsers() {
  console.log(users);
}

insertUsers("Tobias")
  .then(listUsers)
  .catch((erro) => {
    console.log(erro);
  });
