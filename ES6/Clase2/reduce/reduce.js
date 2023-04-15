"use strict"
//Reduce() -> Metodo que se utiliza para reducir una matriz en un solo valor.

//arr.reduce((acumulado, actual) => {
   //bloque de código 
//}, 0);

let numeros = [2, 5, 1, 4, 9];
const suma = numeros.reduce((acumulado, actual) => acumulado + actual, 0);
console.log(suma);

let frase = ["La", "vida", "es", "bella"];
const fraseCompleta = frase.reduce((fraseActual, palabraActual) => fraseActual + " " + palabraActual, "");
console.log(fraseCompleta);

const ventas = [
    {id: 1, monto: 100},
    {id: 2, monto: 50},
    {id: 3, monto: 200},
    {id: 4, monto: 75}
];
const totalVentas = ventas.reduce((total, trimestre) => total + trimestre.monto, 0);
console.log(totalVentas);

const obj = [{nombre: "Juan"},{pais: "Panama"},{trabajo: "Arquitecto"}];
const person = obj.reduce((objActual, property) => {
    objActual[Object.keys(property)[0]] = Object.values(property)[0];
    return objActual;
}, {});

console.log(person);