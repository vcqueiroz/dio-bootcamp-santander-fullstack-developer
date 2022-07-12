//retorna um tipo
function somarValoresNumericos(numero1: number, numero2: number): number {
        return numero1 + numero2;
}
//console.log(somarValoresNumericos(1, 3));

//não retorna nada
function printaValoresNumericos(numero1: number, numero2: number): void {
        console.log(numero1 + numero2);//void não retorna nada
}

//callback
function retornaValoresNumericosETrata(numero1: number, numero2: number, callback: (numero: number) => number): number {
        let resultado = numero1 + numero2;
        return callback(resultado);
}
function aoQuadrado(numero: number): number {
        return numero * numero;
}
function dividirPoreEleMesmo(numero: number): number {
        return numero / numero;//2
}
console.log(retornaValoresNumericosETrata(1, 3, aoQuadrado));
console.log(retornaValoresNumericosETrata(1, 3, dividirPoreEleMesmo));