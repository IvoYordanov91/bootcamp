const fs = require("fs");

const name = "ivo yordanov";
const names = ["pepe", "luis", "luna"];

//writefile: Nos permite escribir dentro de un fichero la información dada. Si el archivo no existe lo crea y si no lo sobre-escribe.
//Primer Argumento: path del archivo
//Segundo Argumento: datos que se necesitan guardar en ese fichero (Siempre debe de ser un string).
//Tercer Argumento: Función callback que quiero ejecutar una vez ha terminado de escribir en el archivo, o en caso de que haya ocurrido un error.
fs.writeFile("informacion.txt", JSON.stringify(name), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("se ha escrito el archivo");
  }
});
fs.writeFile("nombres.json", JSON.stringify(names), (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("se ha escrito el fichero");
  }
});
