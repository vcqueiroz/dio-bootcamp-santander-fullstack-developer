//Métodos
//Adicionar, consultar e deletar
/*
const mySet = new Set();
mySet.add(1);
mySet.add(5);//adicionar

mySet.has(1);
//true
mySet.has(3);
//false
mySet.delete(5);

Set vs Array
- Possui valores únicos;
- Em vez da propriedade length, consulta-se o número de registros pela propriedade size;
- Não possui os métodos map, filter, reduce etc.
*/

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}
console.log(valoresUnicos(meuArray));