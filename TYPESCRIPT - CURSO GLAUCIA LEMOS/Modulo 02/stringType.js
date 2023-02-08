/**
 * arquivo: stringType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo String'
 * data: 14/03/2021
 * author: Glaucia Lemos <@glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// ==> Exemplo 01 - Single Quotes
var nomeCompleto = 'Marcos Lenilson';
console.log(nomeCompleto);
// ==> Exemplo 02 - Double Quotes
var funcaoEmpresa = "Developer Frontend";
console.log(funcaoEmpresa);
// ==> Exemplo 03 - Back Ticks
var nomeEmpresa = 'Microsoft';
var dadosFuncionario = "Seja bem-vindo ".concat(nomeCompleto, "! Voc\u00EA ser\u00E1 ").concat(funcaoEmpresa, " \n    na empresa ").concat(nomeEmpresa);
console.log(dadosFuncionario);
