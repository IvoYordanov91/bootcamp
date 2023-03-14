// Escribe una función llamada "adivinaNumero" que acepte dos parámetros: "numeroUsuario"
// y "numeroSecreto". La función debe comparar los dos números y devolver uno de los
// siguientes mensajes:

// Si "numeroUsuario" es mayor que "numeroSecreto", imprimir "Demasiado alto" y devolver false.
// Si "numeroUsuario" es menor que "numeroSecreto", imprimir "Demasiado bajo" y devolver false.
// Si "numeroUsuario" es igual a "numeroSecreto", imprimir "¡Correcto!" y devolver true.
// Luego, escribe un programa que solicite al usuario que ingrese un número
// y utilice la función "adivinaNumero" para determinar si el número es el número
// secreto o si es demasiado alto o demasiado bajo. El programa debe seguir solicitando
// al usuario que ingrese números hasta que adivine el número secreto.
const prompt = require("prompt-sync")();
let random = Math.floor(Math.random() * 10) + 1;
let numero;
function adivinaNumero(numeroUsuario, numeroSecreto) {
numeroUsuario > numeroSecreto ? console.log("Demasiado alto") : numeroUsuario < numeroSecreto ? console.log("Demasiado bajo") : console.log("¡Correcto!");
}
do {
numero = prompt("Ingresa un número: ", "");
adivinaNumero(parseInt(numero), random);
} while (numero != random);