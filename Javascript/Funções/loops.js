//Version 1 if/else
function numeroPositivo(num) {
    let resultado;

    if (num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }
    return resultado;
}
console.log(numeroPositivo(2)) //true
console.log(numeroPositivo(-9)) //false

//Version 2 if/else
function numeroPositivo(num) {
    let resultado;

    const ehNegativo = num < 0;

    if (ehNegativo) {
        resultado = false;
    } else {
        resultado = true;
    }
    return resultado;
}
console.log(numeroPositivo(2)) //true
console.log(numeroPositivo(-9)) //false

//Version 3 if/else
function numeroPositivo(num) {
    const ehNegativo = num < 0;

    if (ehNegativo) {
        return false;
    }
    return true;
}
console.log(numeroPositivo(2)) //true
console.log(numeroPositivo(-9)) //false

//Switch/case
function getAnimal(id) {
    switch(id) {
        case 1: return "cão";
        case 2: return "gato";
        case 3: return "pássaro";
        default: return "peixe";
    }
}
console.log(getAnimal(1)) 
console.log(getAnimal(4)) 
console.log(getAnimal("1"))

