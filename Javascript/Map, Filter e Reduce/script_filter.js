//- Cria um novo array
//- Não modifica o array original

const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];

console.log(frutas.filter((fruta) => fruta.includes('maçã')));
//retorno: [ 'maçã fuji', 'maçã verde' ]
