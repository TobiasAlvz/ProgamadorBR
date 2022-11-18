const users = ["José", "Maria", "Pedro", "João"];

function insertUsers(name, callBack) {
  setTimeout(() => {
    users.push(name);
    callBack();
  });
}

function listUsers() {
  console.log(users);
}

insertUsers("Tobias", listUsers);
