//Sintaxe e outras restrições
const helloWorld = () => "Hello World";
console.log(helloWorld)

//------//Arrow function NÃO faz hoisting!
const soma = (a, b) => a + b;
console.log(soma(4 ,6))

//---outras restrições---//
//-"this" sempre vai ser o objeto global. Métodos para modificar seu valor não irão funcionar;
//-Não existe o objeto "arguments";
//-O construtor(ex: nmew MeuObjeto()) também não pode ser utilizado. 