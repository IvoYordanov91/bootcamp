//Escribe un programa que pida por pantalla numeros enteros separados por comas.
//Ejemplo: 1 - 1,2 - 1,4,9

//Si se proporciona un solo numero, la función debe imprimir en la consola
//todos los números enteros desde 1 hasta ese número (inclusive).

//Si se proporcionan dos numeros, la función debe imprimir en la consola todos
//los números enteros desde el primer número hasta el segundo número (inclusive).

//Si se proporcionan tres numeros, la función debe imprimir en la consola todos
//los números enteros desde el primer número hasta el segundo número, con un paso igual
//al tercer argumento.

//Si se proporcionan más o menos números, la función debe dar la palabra error.
//El programa no debe perder su ejecución hasta que el usuario lo diga.

let respuesta;
let quiereContinuar;
//console.log(numeros);
do {
  const prompt = require("prompt-sync")();
  let input = prompt("Dame la entrada al programa: ", "");
  //console.log(input);
  let numeros = input.split(",");
  for (let i = 0; i < numeros.length; i++) {
    numeros[i] = parseInt(numeros[i]);
  }

  if (numeros.length <= 1) {
    for (let i = 1; i <= numeros[0]; i++) {
      console.log(i);
    }
  } else if (numeros.length == 2) {
    for (let i = numeros[0]; i <= numeros[1]; i++) {
      console.log(i);
    }
  } else if (numeros.length == 3) {
    for (let i = numeros[0]; i <= numeros[1]; i = i + numeros[2]) {
      console.log(i);
    }
  } else {
    console.log("El número de enteros no es correcto");
  }
  respuesta = prompt("Quiere continuar?", "");
  quiereContinuar = respuesta == "Si" ? true : false;
} while (quiereContinuar);
