//Named exports
export function mostraIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

export function mostraCidade(pessoa) {
    return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}

export function mostraHobby(pessoa) {
    return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}

//-----pode ser chamado por export
export {
    mostraIdade,
    mostraCidade,
    mostraHobby
}

///Default exports
//Só pode haver um por arquivo
//Será o retorno padrão do seu arquivo
export default mostraHobby;