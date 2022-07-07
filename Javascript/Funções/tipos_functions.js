//Função Anônima
/*const soma = function (a, b) {
    return a + b;
}

console.log(soma(1, 2)) //3
console.log(soma(5, 4)) //9

/*(
    function(a, b) {
        //let name = "Digital Innovation One"
        return a + b;
    } 
)(1, 2); //3
//Digital Innovation One*/
/*const soma2 = (
    function() {
        return a + b;
    }
);(1, 2);
console.log(soma2);

//Callbacks
const calc = function(operação, num1, num2) {
    return operação(num1, num2);
}

const somaNum = function(num1, num2) {
    return num1 + num2;
}

const subNum = function(num1, num2) {
    return num1 - num2;
}

const resultSoma = calc(somaNum, 1, 2);
const resultSub = calc(subNum, 1, 2);

console.log(resultSoma); //3
console.log(resultSub); //-1

//Valores padrão
function exponecial(array, num = 1) {
    const result = [];

    for(let i = 0; i < array.length; i++) {
        result.push(array[i] ** num);
    }

    return result;
}

console.log(exponecial([1, 2, 3, 4]))
//[ 1, 2, 3, 4 ]
console.log(exponecial([1, 2, 3, 4], 3))
//[ 1, 8, 27, 64 ]*/

//Object Arguments
function findMax() {
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return console.log(max);
}

findMax(1, 2, 3, 6, 90, 1);