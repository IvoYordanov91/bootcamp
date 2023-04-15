// El método setTimeout() se utiliza para retrasar la ejecuón de una función.
//Se le pasa la función que debe ejecutarse y el tiempo en milisegundos antes de ejecutarse. 
//setTimeout(funcion, tiempo);
console.log("Empieza el programa, a la siguiente línea le quedan 6 segundos");
setTimeout(() => console.log("Me he ejecutado tras 6 segundos"), 6000);

//El setInterval() se utiliza para ejecutar una función de manera periódica cada cierto tiempo en milisegundos. 

const tresSegundos = setInterval(() => console.log("Me ejecuto cada 3 segundos"), 3000);

//El método clearInterval(): Para la ejecución de un intervalo. 
clearInterval(tresSegundos);