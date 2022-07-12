const pessoa = {
    nome: 'Vanderlei',
    idade: 29,
    profissao: 'Desenvolvedor'
};
pessoa.idade = 25;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Pintor'
};
const paula = {
    nome: 'Paulo',
    idade: 25,
    profissao: 'desenvolvedor'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta,', 'Programação']
};
const monica = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Matemática discreta,', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
//# sourceMappingURL=objeto-listas.js.map