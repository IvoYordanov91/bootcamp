let persona = {
    nombre: "Ricardo",
    edad: "50",
    saludar: function () {
        console.log("Hola! Me llamo Ricardo");
    }
}
console.log(persona.nombre);
persona.saludar();

let arr = ["element1", "element2", "element3"];
console.log(arr[0]);

let random = [1, "Hola Mundo", true, persona];
console.log(persona.nombre[0]);

let cad = "Hola Mundo";
let cadPartida = cad.split(" ");
console.log(cadPartida);

let list = [1, 3, 4];

let paises = ["España", "Francia", "Inglaterra", "México", "Portugal", "Alemania"];

//Metodos POP() -> Elimina el último elemento del array, devuelve el valor del elemento eliminado.
let paisesEliminados = [];
paisesEliminados[0] = paises.pop();
console.log(paisesEliminados);
console.log(paises);

//Metodo PUSH() -> Añade un elemento o varios al final del array.
console.log(paises.push("Colombia", "Bulgaria"));

//Metodo SHIFT() -> Elimina el primer elemento del array. Devuelve el elemento eliminado
console.log(paises.shift());
console.log(paises);

//Metodo UNSHIFT() -> Inserta al principio uno o varios elementos. Devuelve la longitud del nuevo array. 
console.log(paises.unshift("China"));
console.log(paises)

//Metodo Reverse() -> Permite invertir el orden de los elementos. Devuelve el array invertido. 
console.log(paises.reverse());

//Metodo SORT() -> Es utilizado para ordenar los elementos de un array. Modifica el array original. 
//Si no le metemos ningún argumento ordena por orden alfabetico
//Si es un valor negativo, el primer argumento es menor que el segundo
//Si es positivo el primer argumento va antes que el segundo. 
//Si es cero es que son iguales

let numeros = [1, 25, 3, 40, 5, 16, 7, 8, 19]
console.log(numeros.sort(function(a, b){
    return a - b;
}));

console.log(paises.sort());
console.log(paises);

//Metodo SPLICE() -> Depende del número de argumentos que le pasemos va a hacer una cosa u otra
//El primer argumento, es el indice del array donde quiero comenzar a modificar
//El segundo argumento es el número de elementos que quiero eliminar o sustituir
//El tercer argumento y posteriores se añaden al array a partir de la posición especificada en el primer argumento

paises.splice(1, 3, "España", "Marruecos");
console.log(paises);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let aux = ["Japón", "Corea"];


// Metodo CONCAT() -> Sirve para fusionar varios arrays. No modifica ninguno de los arrays.
console.log(paises.concat(aux));

//Metodo JOIN() -> Devuelve una cadena con los elementos separados por defecto por comas
console.log(paises.join(" "));


//Metodo SLICE -> Devuelve una sección específica del array sin modificarlo
// El primer parámetro es obligatorio, y es le indice desde donde se empieza a contar incluido.
// El segundo parámetro es el final

console.log(paises);
console.log(paises.slice(2, 4));

//Metodo TOSTRING() -> Similar al join(), no admite parámetros
console.log(paises.toString());

//Metodo INDEXOF -> Devuelve el indicie del primer elemento que coincide con el parámetro proporcionado
let bin = [1, 0, 0, 1, 0];
console.log(bin.indexOf(0, 2))
bin.splice(bin.indexOf(0), 1);
console.log(bin);

//METODO LASTINDEXOF -> Devuelve el índice del último elemento que coincide con el parámetro proporcionado. Si no encuentra devuelve -1. 
console.log(bin)
console.log(bin.lastIndexOf(0, 3));

//Metodo INCLUDE -> devuelve true si se contiene un elemento 
console.log(bin.includes(1));

//ARRAYS BIDIMENSIONALES -> Filas y columnas

let matriz = [
    [1, 5, 7, 5],
    [2, 3, 4, 1],
    [5, 1, 3, 2]
]
console.log(matriz[matriz.length -1][matriz[matriz.length - 1].length - 1]);