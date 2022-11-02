var numero1 = 1;
// A difereça do var para o let, é que o var tem um escopo global, o let tem um escopo local (const tbm)
let numero2 = 2;
// O const não pode ser atribuido outro valor o que é diferente de adicionar um valor novo.
const numero3 = [3];

// Isso pode
numero3.push([2]);
// isso não
// numero3 = [2];

console.log(numero1);
console.log(numero2);
console.log(numero3);
