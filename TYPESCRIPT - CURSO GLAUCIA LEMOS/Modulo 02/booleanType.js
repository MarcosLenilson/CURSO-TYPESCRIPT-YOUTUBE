/**
 * arquivo: booleanType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Boolean'
 * data: 17/02/2021
 * author: Glaucia Lemos <@glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// ==> Exemplo 01
var tarefaConcluida = true;
var tarefaPendente = false;
console.log(tarefaConcluida);
console.log(tarefaPendente);
// ==> Exemplo 02
var concluido = false;
if (!concluido) {
    console.log('Tarefa foi concluída com sucesso!');
}
else {
    console.log('Tarefa Pendente!');
}
var drive = true;
var idade = 18;
if (drive === true && idade >= 18) {
    console.log('PODE DIRIGIR');
}
else {
    console.log('NÃO PODE DIRIGIR, MULTA!');
}
