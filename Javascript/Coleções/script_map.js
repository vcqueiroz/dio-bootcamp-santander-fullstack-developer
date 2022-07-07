//Métodos
//Adicionar, ler e deletar
/*
const myMap = new Map()

myMap.set('apple','fruit');
//Map(1) {"apple" => "fruit"}
myMap.get("apple");
// "fruit"
myMap.delete("apple");
//true
myMap.get("apple");
//undefined

Map us Objeto
- Maps podem ter chaves de qualquer tipo;
- Maps possuem a propriedade length;
- Maps são mais fáceis de iterar;
- Utilizado quando o valor das chaves é desconhecido
- Os valores tem o mesmo tipo
*/

function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));
