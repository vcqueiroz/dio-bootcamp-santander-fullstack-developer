//Map vs forEach
//- Valor do retorno
//- Considere se o array auxiliar será necessário

//Usando Map

const array = [1, 2, 3, 4, 5];

array.map((item) => item *2);//retorno: [2, 4, 6, 8, 10];

//Usando forEach
const array2 = [1, 2, 3, 4, 5];

array2.forEach((item) => item *2);//retorno: undefined
