//Las funciones son bloques de código que se definen una vez, y una vez se define
//se puede invocar/llamar en cualquier momento durante la ejecución del programa.
//Las funciones están formadas por la palabra clave function, un identificador, un conjunto de 0 o más argumentos, y un bloque de código encerrado entre llaves. 

//function(argumentos){
    //Bloque de código a ejecutar
//}
function sum(a, b) {
    return a + b;
}
function esPar(num) {
    return num % 2 == 0;
}
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(sum(2, 5));
console.log(esPar(2));
console.log(generarNumeroAleatorio(20,100));

//Una función es llamada pero no se le proporciona alguno de los argumentos -> El valor de ese argumento se convierte en undefined
function sum(a, b) {
    if (b === undefined) {
        return a;
    }
    return a + b;
}
console.log(sum(3));

//Nullish coalescing (??) -> Es un operador que permite evaluar si una variable es undefined o null y si lo es, asignarle un valor por defecto.
let nombre;
let nombreUsuario = nombre ?? "Anónimo";
console.log(nombreUsuario);

//forEach -> Método para los arrays que permite aplicar una determinada función a cada elemento de un array.
//MiArray.array.forEach((value, index) => {

//} );

let numeros = [2, 3, 5, 6];
numeros.forEach((value, index) => {
    console.log("Indice" + index);
    console.log(value);
    });

let miArray = ["1", "5", "11"];
console.log(miArray);
miArray.forEach((value, index) => {
    miArray[index] = parseInt(value);
})
console.log(miArray);
