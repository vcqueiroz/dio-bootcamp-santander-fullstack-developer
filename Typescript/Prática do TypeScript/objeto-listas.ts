const pessoa = {
    nome: 'Vanderlei',
    idade: 29,
    profissao: 'Desenvolvedor'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paulo',
    idade: 25,
    profissao: 'desenvolvedor'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?:  Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta,', 'Programação']
}

const monica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Matemática discreta,', 'Programação']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(monica.materias)