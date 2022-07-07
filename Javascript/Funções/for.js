function multiplicaPorDois(arr) {
    let multiplicados = [];

    for(let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }
    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

console.log(multiplicaPorDois(meusNumeros)) //[ 4, 66, 912, 712, 80 ]

//For....in
function forInExemplo(obj) {
    for(prop in obj) {
        console.log(prop); //retorna as chaves
        console.log(obj[prop]); //retorna os valores
    }
}
const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto);

//For...of
function logLetras(palavra) {
    for (letra of palavra) {
        console.log(letra);
    }
}
const palavra = "abacaxi";
logLetras(palavra)

function logNumeros(nums) {
    for (nm of nums) {
        console.log(nm);
    }
}
const nums = [30, 20, 233, 2];
logLetras(nums)