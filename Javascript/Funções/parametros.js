//spread
/*function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); ///...spread sintaxe

//Rest
function confereTamanho(...args) {
    console.log(args.length)
}
confereTamanho() //0
confereTamanho(1, 2) //2
confereTamanho(3, 4, 5) //3*/

//Object Destructuring
const user = {
    id: 42,
    displayName: 'Djoe',
    fullName: {
        firstName:'John',
        lastName: 'Doe'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

console.log(userId(user))

console.log(getFullName(user))