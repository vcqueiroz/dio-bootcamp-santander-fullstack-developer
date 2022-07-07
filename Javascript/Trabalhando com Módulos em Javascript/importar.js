//Named exports
import {função, variavel, classe} from './arquivo.js';

//Default exports
import valorDefault from './arquivo.js';

//trocando nomes de imports
import {arquivo as Apelido} from './arquivo.js';
Apelido.metodo();

//Importando todos os dados de um arquivo
import * as INFOS from './arquivo.js';
INFOS.metodo();
console.log(INFOS.variavel);

//Vinculando ao HTML
<script type="module" src="./main.js"></script>

//Curiosidades
/*
-Módulos sempre estão em strict mode;
-Podem ser utilizadas as extensões .js e .mjs
-Para testes locais, é necessário utilizar um servidor
-Ao importar, sempre lembre da extensão (.js, .mjs)
-Ao importar, sempre utilize ./ como ponto de partida
*/