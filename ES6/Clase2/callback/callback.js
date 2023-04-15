"use strict"
//En Javascript, la sincronia es la capacidad de realizar operaciones de forma asíncrona o no bloqueante. 
//Esto significa que el código va a continuar ejecutandose mientras se espera la respuesta de otra operación (operación asíncrona)

//En lugar de bloquear la ejecución del código hasta que una operación (petición, descarga de archivos, una subida de archivos,
//inserción en una base de datos) estas peticiones se pueden enviar a un segundo plano para que el hilo principal de la aplicación continue ejecutandose. 
//Vamos a ver callbacks, promises y la estructura async-await. 

//Callback -> funciones que se pasan como argumento a otra función y se invocan dentro de la función receptora. 
//Su proposito es proporcionar una para función para que la función receptora la ejecute cuando haya terminado su ejecución. 
function sumar(a, b, callback) {
    let resultado = a + b;
    callback(resultado);
}

function imprimir(resultado) {
    console.log(`El resultado es ${resultado}`);
}
sumar(2, 3, imprimir);

const callbackResult = (list, mensaje) => {
    console.log(`El listado es ${list} - `, mensaje);
}

const addItemAndTriggerCallback = (item, list, callback) => {
    if (!list) {
        setTimeout(() => {
            throw new Error("No existe el array");
        }, 2000);
    } else {
        setTimeout(() => {
            list.push(item);
            callback(list, "[OK]");
        }, 2000);
    }
    callbackResult(list, "OK");
}

addItemAndTriggerCallback("Ricardo", ["Juan", "Jose"], callbackResult);
addItemAndTriggerCallback("Ricardo");