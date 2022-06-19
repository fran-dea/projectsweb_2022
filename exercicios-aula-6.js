// Use `console.log(variavel)` para verificar suas respostas no Console
// do Inspetor da Web do navegador.

// 1. Gere uma lista contendo apenas os números pares (filter)
const numeros = [1, 4, 10, 23, 26, 27, 29, 30, 311, 320, 4490];

function ehpar(x) {
  if (x%2 == 0) return x;

}
let pares = numeros.filter(ehpar);

console.log("Os pares são:", num);


// 2. Faça uma lista que possua apenas frutas com quatro letras (filter)
// Dica: você pode usar 'string'.length para verificar a quantidade de
// caracteres de uma string.
const frutas = [
  'maçã', 'banana', 'pera', 'uva', 'coco', 'caqui', 'kiwi', 'acerola'
]

function igual4(j){
  if ((j.length) == 4) return j;
}

let frutas4letras = frutas.filter(igual4);

console.log("As frutas com 4 letras são:", frutas4letras);

// 3. Maiusculize os nomes dados (map)
// Dica: Maiusculizar é escrever cada palavra com a inicial em
// maiúsculo. Você pode conferir todos os métodos de String em:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos
const nomes = ['cecília', 'roberto', 'bruna', 'Osvaldo', 'Carlos'];
 let maiuscula = (str) => {
  return str.toUpperCase();
 }

 let nomesuppercase = nomes.map(maiuscula);
 
 console.log("Os nomes em maiúscula são:", nomesuppercase);


// 4. Concatene os nomes e sobrenomes da lista (map)
const nomesESobrenomes = [
  ['Fernanda', 'Montenegro'],
  ['Lázaro', 'Ramos'],
  ['Heloísa', 'Périssé'],
  ['Daniel', 'Furlan'],
  ['Adriana', 'Esteves'],
]
let concatena = (lista) => {
  return lista[0] + " " + lista[1];
}

let fullname = nomesESobrenomes.map(concatena);

console.log("A concatenação de nomesESobrenomes resulta em:" ,fullname);

// 5. Calcule a média das notas (reduce)
const notas = [7, 5, 4, 3, 8.5]
let media = (notas.reduce((anterior, atual) => (anterior + atual), 0))/notas.length;
console.log("A média é:", media);

// 6. Calcule a média ponderada das notas (reduce)
// Cada item da lista é composto por uma sublista com a nota (na
// primeira posição) e o peso (na segunda posição).

const notasComPeso = [[7, 2], [5, 1], [4, 2], [3, 1], [8.5, 2]];

let medianotascompeso = (notasComPeso.reduce((anterior, atual) => anterior + (atual[0]*atual[1]), 0))/notasComPeso.reduce((anterior, atual) => anterior + atual[1], 0);
console.log("A média ponderada é:" ,medianotascompeso);

// 7. (Extra) Refaça o exercício 6 tirando as duas menores notas. Dica:
// Lembre dos métodos sort e slice.
let  notascpeso = [[7, 2], [5, 1], [4, 2], [3, 1], [8.5, 2]];
notascpeso = notascpeso.sort((a,b) => a[0] - b[0]);
notascpeso = notascpeso.slice(2, notascpeso.length);
let mediaponderada = (notascpeso.reduce((anterior, atual) => anterior + (atual[0]*atual[1]), 0))/notascpeso.reduce((anterior, atual) => anterior + atual[1], 0);
console.log("A média ponderada sem as duas menores notas é:" ,mediaponderada);
console.log(notascpeso)
