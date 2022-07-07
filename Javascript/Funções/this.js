const pessoa = {
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

console.log(pessoa.fullName())
console.log(pessoa.getId())

//---Manipulando This---
//Call --> É possível passar parâmetros para essa função separando-os por vírgulas
const pessoa1 = {
    nome: "Miguel",
};

const animal1 = {
    nome: "Murphy",
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(pessoa1);
//-------//
const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5);

//Apply --> É possível passar parâmetros para essa função dentro de array
const pessoa2 = {
    nome: "Miguel",
};

const animal2 = {
    nome: "Julieta",
};

function getSomething() {
    console.log(this.nome);
}

getSomething.apply(animal2);
//------//
const myObj2 = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj2, [1, 5]);//no apply deve ser passado com []

//Bind --> Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro  
const retornaNomes = function() {
    return this.nome;
};
let bruno = retornaNomes.bind({nome: 'Bruno'});

console.log(bruno()); //Bruno