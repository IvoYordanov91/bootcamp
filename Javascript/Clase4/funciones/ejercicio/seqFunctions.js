const prompt = require("prompt-sync")();
let respuesta;
let quiereContinuar;

function convierteInt(miArray) {
    for (let i = 0; i < miArray.length; i++) {
        miArray[i] = parseInt(miArray[i]);
    }
    return miArray;
}
function seq(num1, num2, inc) {
    if (!num1) {
    console.log("No has introducido nada");
    } else if(!num2 && !inc) {
        for(let i = 1; i <= num1; i++) {
            console.log(i);
        }
    } else if (!inc) {
        for(let i = num1; i <= num2; i++) {
            console.log(i);
        }
    } else {
        for(let i = num1; i <= num2; i = i + inc){
            console.log(i);
        }
    }
}

do {
let input = prompt("Dame la entrada al programa: ", "");
let numeros = input.split(",");
numeros = convierteInt(numeros);
numeros.length < 4 ? seq(numeros[0], numeros[1], numeros[2]) : console.log("Demasiados argumentos");
respuesta = prompt("Quiere continuar?", "");
quiereContinuar = respuesta == "Si" ? true : false;
} while (quiereContinuar);
