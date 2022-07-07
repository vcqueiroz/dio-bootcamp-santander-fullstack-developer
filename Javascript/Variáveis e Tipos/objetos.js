let obj = {};

obj.name = "Vanderlei";
obj.age = 20;

console.log(obj); //Retorna os objetos e valores
console.log(Object.values(obj)); //Retorna os valores
console.log(Object.keys(obj)); //Retorna as chaves

let person = {
    name: "Queiroz",
    age: 29,
    adress: "Rua 5"
}

console.log(person);
//console.log(person.name);

person.numberOfSiblings = 3; //Adiciona chave individual e valor
console.log(person);

let mom = "nameOfMom";
person[mom] = "Maria";
console.log(person);

//person.mom = "Marta";
//console.log(person);
