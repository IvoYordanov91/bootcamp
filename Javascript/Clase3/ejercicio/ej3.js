const prompt = require("prompt-sync")();
// Escribe un programa que solicite al usuario su nota en un examen y le indique su calificación correspondiente.
// Utiliza un operador ternario múltiple para asignar la calificación correspondiente según la siguiente tabla y muestra el mensaje por consola.
// 0-4: Suspenso
// 5-6: Suficiente
// 7-8: Notable
// 9-10: Sobresaliente
let nota = prompt("¿Cuál es su nota de examen? ")
let calificacion = nota < 5 ? "suspenso" : nota < 7 ? "suficiente" : nota < 9 ? "notable" : "sobresaliente";
console.log("Su calificación es " + calificacion);