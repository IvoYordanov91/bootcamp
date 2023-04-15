//ES6 es una versión de Javascript que se lanzó en 2015, y actualmente es la que usamos en los navegadores. 
// Esto trae caracteristicas nuevas sobre todo para hacer que el lenguaje sea más fácil y potente de escribir. 

// Desestructuración: Esto es una caracteristica que permite extraer valores de objetos y matrices de una forma más concisa. 
//Esto lo que nos permite es asignar a variables estos valores sin tener que acceder a ellos de forma individual. 

const persona = {
    nombre: "Ricardo",
    edad: 50,
    profesion: "Panadero"
}
//const nombre = persona.nombre;
//const edad = persona.edad;
//const profesion = persona.profesion;

const {nombre, edad, profesion} = persona;
console.log(nombre);

//Ejemplo matrices
const numeros = [1, 2, 3, 4, 5, 6, 7];
const [primerNumero, segundoNumero, tercerNumero, , quintoNumero, ...restoNumeros] = numeros;
console.log(primerNumero);
console.log(segundoNumero);
console.log(restoNumeros);

//Funciones con multiples parámetros: Si tenemos una función con multiples parámetros y algunos son opcionales, 
//podemos utilizar la desestructuración para asegurar valores por defecto. 
function configurarOpciones({color = "blanco", tamaño = "mediano", tipo = "redondo"}) {
    console.log(color);
    console.log(tamaño);
    console.log(tipo);
}
configurarOpciones({color : "rojo"});

// Spread operator: Es un operador que se utiliza para descomponer los elementos de un objeto iterable.
//(matrices, cadenas de texto, ...) en elementos individuales. Su sintaxis es el uso de tres puntos consecutivos seguidos del objeto iterable que queremos descomponer. 

console.log(...numeros);

//Unir matrices: Podemos unir dos o más matrices en una sola. 
const numeros2 = [100, 101, 102, 103, 104];
const numeros3 = [20, 30, 40];
const numerosUnidos = [...numeros, ...numeros2, ...numeros3];
console.log(numerosUnidos);

//Pasar argumentos a una función
function sumarNumeros(a, b, c) {
    return a + b + c;
}
const trio = [1, 2, 3];
console.log(sumarNumeros(...trio));

// Clonar objetos: Podemos usar el sread operator para crear una copia de un objeto
const objOri = {nombre: "Juan", edad: "30"};
const propiedadesPersona = {sueldo: "1000", pelo: "Rubio"};
const objCopia = { objOri, ...propiedadesPersona };
console.log([...numeros].reverse());
console.log(objCopia);

const matriz = [...numeros, 8];
console.log(matriz);

let characters = [..."Ricardo"];
console.log(characters);
const { nombreUsuario, ...restoPropiedades } = objCopia
console.log(nombreUsuario);

// La sintaxis import/export: Se utiliza para importar y exportar módulos en una aplicación. 
// Un módulo es un archivo o una colección de archivos que exporta una o más variables, funciones clases, .... y se pueden importar en otros archivos para su uso. 

//Con la palabra export podemos hacer que sean accesibles desde fuera, y con import podemos utilizar los valores exportados. 

import { PI, dividir } from "./export";
console.log(PI);
console.log(dividir(6, 2));


