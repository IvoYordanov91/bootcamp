// Crea un programa que genere una matriz de números aleatorios de 5x5
// e imprima por consola la suma de cada fila y de cada columna de la matriz.
// Para crear un numero aleatorio se utiliza Math.floor(Math.random() * 10) + 1;
var values = "";
var content;
var sumaFila = 0;
var sumaColumna = 0;
var arr = [];
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    let rand = Math.floor(Math.random() * 10) + 1;
    values += " " + rand + ",";
  }
  content = values.replace(/\n/, "");
  arr.push(content.replace(/.$/, "").split(",").map(Number));
  values = "";
}
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
    sumaFila += parseInt(arr[i][j]);
    sumaColumna += parseInt(arr[j][i]);     
    }
    console.log(sumaFila);
    console.log(sumaColumna);
    sumaFila = 0;
    sumaColumna = 0;
}
