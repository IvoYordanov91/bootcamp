// ¿Cómo acceder al primer elemento de un array? Dime 4 opciones
//Dado el siguiente array:
let arr = [0, 2, 3, 4];
//solución:
console.log(arr[0]);
console.log(arr.shift());
arr.unshift();
console.log(arr.reverse()[arr.length -1]);
arr.reverse();
console.log(arr[arr.slice(0, 1)]);
// ¿Cómo acceder al último elemento de un array? Dime 4 opciones
console.log(arr[arr.length -1]);
console.log(arr.slice(-1)[0]);
console.log(arr.pop());
console.log(arr[arr.splice(arr.length -1, 1)]);
