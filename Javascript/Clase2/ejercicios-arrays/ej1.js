// ¿Cómo acceder al primer elemento de un array? Dime 4 opciones
//Dado el siguiente array:
let arr = [0, 2, 3, 4];
//solución:
console.log(arr[0]);
console.log(arr[arr.indexOf(0)]);
console.log(arr[arr.lastIndexOf(0)]);
console.log(arr[arr.slice(0, 1)]);
// ¿Cómo acceder al último elemento de un array? Dime 4 opciones
console.log(arr[3]);
console.log(arr[arr.length -1]);
console.log(arr[arr.slice(arr.length -2, arr.length -1)]);
console.log(arr[arr.indexOf(4)]);
