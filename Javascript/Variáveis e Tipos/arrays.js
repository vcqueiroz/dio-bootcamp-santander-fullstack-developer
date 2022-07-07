let array = [3, 4];

array.push(5); //adiciona no final
console.log(array);

array.pop(); //excluo uma posição do final
console.log(array);

array.shift(); //excluo uma posição do ínicio
console.log(array);

array.unshift(6); //adiciona no ínicio
console.log(array);

console.log(array.includes(1)); //Verifica se possui o elemento

console.log(array.every(item => item === 4)); //Verifica se todos os elementos são iguais

console.log(array.some(item => item === 6)); //Verifica se há algum desse elemento

array.reverse(); //Reverte o array
console.log(array);