/* eslint-disable prettier/prettier */
/**
 * arquivo: typeAnnotation.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Type Annotation'
 * data: 16/02/2021
 * author: Glaucia Lemos <@glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// export { };
// ==> Variáveis [Type Annotations]
var nome = 'Marcos Lenilson';
console.log(nome);
// ==> Arrays [Type Annotations]
var animais = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa', 'Papagaio'];
var numbers = [1, 2, 3, 5, 4, 9, 10, 23];
console.log(numbers);
console.log(animais);
// ==> Objetos [Type Annotations]
var carro;
carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 80000 };
console.log(carro.nome);
// ==> Functions [Type Annotation]
function multiplicarNumero(num1, num2) {
    return num1 * num2;
}
console.log(multiplicarNumero(2, 5));
