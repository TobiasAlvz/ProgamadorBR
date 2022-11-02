function show() {
  // Atraves de um id
  let byId = document.getElementById("contact-list");
  console.log(byId);
  // Atraves do nome da tag
  const byTagName = document.getElementsByTagName("label");
  console.log(byTagName);
  for (let label of byTagName) {
    console.log(label);
  }
  // Atraves de um classe
  let byClassName = document.getElementsByClassName("contact-input");
  console.log(byClassName);
  for (let input of byClassName) {
    console.log(input);
  }
  // Atraves de uma query, somente 1 elemento
  let querySelector = document.querySelector(".contact-input");
  console.log(querySelector);
  // Atraves de uma queryAll, varios elementos
  let querySelectorAll = document.querySelectorAll(".contact-input");
  console.log(querySelectorAll);
  for (let all of querySelectorAll) {
    console.log(all);
    // Pelo Nome
    const byName = document.getElementsByName("contact1");
    console.log(byName);
  }
}
