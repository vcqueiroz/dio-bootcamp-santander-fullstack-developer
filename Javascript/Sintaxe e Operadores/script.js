function recebe(a, b) {
    var soma = a + b;
    if (a == b && soma < 10) {
        console.log(`Os números ${a} e ${b} são iguais. Sua soma é menor que 10.`);
    } else if (a == b && soma >= 10 && soma < 20) {
        console.log(`Os números ${a} e ${b} são iguais. Sua soma é maior/igual a 10 e menor que 20.`);
    } else if (a != b && soma > 10 && soma < 20) {
        console.log(`Os números ${a} e ${b} não são iguais. Sua soma é maior que 10 e menor que 20.`);
    } else if (a == b && soma > 20) {
        console.log(`Os números ${a} e ${b} são iguais. Sua soma é maior que 20.`);
    } else {
        console.log(`Os números ${a} e ${b} não são iguais. Sua soma é maior que 20.`);
    }
}

recebe(12, 14);