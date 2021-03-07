/*
let miNumero = 15;
for (let i = 0; i <= miNumero; i++) {
  console.log(i);
}
// While
while (i <= miNumero) {
  console.log(i);
  i++;
}
// Do While
let i = 0;
do {
  console.log(i)
  i++
} while (i <= miNumero);
// Funciones de Flecha
const miFuncion = function () {
  console.log("Holi holi");
}
// miFuncion();
const miFuncion2 = () => console.log("Holi holi 2");
const suma = (uno, dos) => uno + dos; // Retorno implícito
const suma1 = (uno, dos) => {
  return uno + dos
}
console.log(suma1(2, 2));
//miFuncion2();
*/


let numero = Number(prompt("Ingresa un numero entre 1 a 100:"));

for (let i = 0; i <= numero; i++) {
  console.log(i);
}

let resp = "";
do {
  resp = prompt("¿De qué color es el caballo blanco de Napoleón?");
} while (!(resp.trim() === "blanco"));

let matematica = Number(prompt("¿Cúal es tu promedio de Matemáticas?:"));
let fisica = Number(prompt("¿Cúal es tu promedio de Fisica?:"));
let ciencias = Number(prompt("¿Cúal es tu promedio de Ciencias?:"));

let promedio = [matematica, fisica, ciencias];
const promedioConst = (arreglo) =>
  Math.round(arreglo.reduce((uno, dos) => uno + dos) / arreglo.length);
alert(`el promedio es: ${promedioConst(promedio)}`);

let fruta1 = prompt("Escribe un a fruta")
let fruta2 = prompt("Escribe un a fruta")
let fruta3 = prompt("Escribe un a fruta")

let arregloFrutas = [fruta1, fruta2, fruta3];


let nombre = prompt(
  "ingresa tu nombre1"
);
let vocales = nombre.match(/[aeiou]/gi).length;
let total = nombre.match(/[a-z]/gi).length;

let consonantes = total - vocales;

alert(
  `Vocales: ${vocales} Consonantes: ${consonantes}`
);