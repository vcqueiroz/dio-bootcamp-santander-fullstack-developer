//Return vs Throw
//---Return
function verificaPalindromo(string) {
    if (!string) return "String inválida";

    return string === string.split('').reverse().join('');
}
console.log(verificaPalindromo('cat'));

//---Throw
function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}
console.log(verificaPalindromo(''));

//-----------//
//Try...catch
function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string)
    } catch (error) {
        throw error
    }
}
console.log(tryCatchExemplo(''));

//----------//
//Finally
function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string)
    } catch (error) {
        throw error;
    } finally {
        console.log('A string enviada foi: ' + string);
    }
}
console.log(tryCatchExemplo(''));