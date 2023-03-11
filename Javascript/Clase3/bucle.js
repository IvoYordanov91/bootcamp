// Bucles -> Permiten repetir un bloque de código varias veces mientras se cumpla
//For, while, forEach, for..of, for..in, do..while
//Inicialización -> Se va a realizar antes de que el bucle comience. Generalmente se utiliza para declarar una variable que sirva como control del bucle.
//Condición -> Se comprueba antes de cada iteración para ver si hay que iterar más sobre el bloque
//expresionfinal -> Se ejecuta después de cada iteración, generalmente para actualizar la variable de control
//FOR -> Se utiliza para iterar sobre una secuencia de valor
//for(inicializacion; condicion; expresionfinal) {
//codigo a ejecutar en cada iteración.
//}
for (let i = 0; i < 5; i++) {
  console.log(i);
}
let frutas = ["Naranjas", "Peras", "Mandarinas"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
let tipoFrutas = [
  { nombre: "Naranja", tipo: "Citrico" },
  { nombre: "Pera", tipo: "Normal" },
  { nombre: "Mandarinas", tipo: "Citrico" },
];

let citricos = [];
for (let i = 0; i < tipoFrutas.length; i++) {
  tipoFrutas[i].tipo == "Citrico" ? citricos.push(tipoFrutas[i].nombre) : false;
}
console.log(citricos);

//Bucles anidados -> el bucle esterno es el encargado de recorrer las filas de la matriz, y el bucle interno es el encargado de recorrer cada uno de los elementos de las columnas
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i]);
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}
//for..of -> Bucle que nos permite recorrer los elementos de objetos iterables.
frutas = ["Naranjas", "Peras", "Mandarinas", "Piñas"];
//for(const variable of objeto) {
//    console.log(variable);
//}
for (const fruta of frutas) {
  console.log(fruta);
}
for (const fila of matriz) {
  console.log(fila);
  for (const elemento of fila) {
    console.log(elemento);
  }
}

//for..in -> Bucle que nos permite recorrer las propiedades de un objeto. En cada iteración nos devuelve la key(nombre de la propiedad).
// No se utiliza para recorrer arrays porque las propiedades que tienen son indices
let superheroe = {
  nombre: "Peter Parker",
  pseudonimo: "Spiderman",
  poder: "trepar muros",
};
for (const propiedad in superheroe) {
  console.log(
    "Este superheroe tiene como " + propiedad + " " + superheroe[propiedad]
  );
}

// Bucle While -> Bucle que nos permite repetir una sección de código mientras una condición sea verdadera
// La condición se comprueba antes de entrar en el bucle, y si es verdadera se ejecuta.
let i = 0;
//while (condicion){
//Bloque de código que se ejecuta
//    i++;
//}
while (i < 5) {
  console.log(i);
  i++;
}

// Do While -> Bucle que nos permite recorrer una sección de código varias veces mientras una condición se cumpla
// Al estar la condición tras el bloque de código, este se ejecuta al menos una vez.

//do {
  //bloque
//} while (condicion);

let cont = 10;
do {
  console.log(cont);
  cont++;
} while (cont < 5);
