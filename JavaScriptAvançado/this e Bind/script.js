function animalName() {
  // o this depende do contexto.
  console.log(this.name);
}

let dog = {
  name: "Lucas",
  // Aqui o this se refere a Lucas, nome desse animal
  callName: animalName,
};

let cat = {
  name: "Dave",
  // Aqui o this se refere a Dave, nome desse animal
  callName: animalName,
};
let shark = {
  name: "Xandão",
};
dog.callName();
cat.callName();

//  Para achar o contexto, a gente usa o Bind
// O bind serve para encaixar o contexto, substituindo o this.
let bindedFunction = animalName.bind(shark);
bindedFunction();
