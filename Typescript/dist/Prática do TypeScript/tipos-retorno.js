//retorna um tipo
function somarValoresNumericos(numero1, numero2) {
    return numero1 + numero2;
}
//console.log(somarValoresNumericos(1, 3));
//não retorna nada
function printaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2); //void não retorna nada
}
//callback
function retornaValoresNumericosETrata(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPoreEleMesmo(numero) {
    return numero / numero; //2
}
console.log(retornaValoresNumericosETrata(1, 3, aoQuadrado));
console.log(retornaValoresNumericosETrata(1, 3, dividirPoreEleMesmo));
//# sourceMappingURL=tipos-retorno.js.map