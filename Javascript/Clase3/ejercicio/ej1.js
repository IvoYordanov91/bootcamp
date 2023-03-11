let mascota = prompt("Qué mascota quieres?","");
if (mascota == "perro") {
console.log("Has escogido el perro");
} else if (mascota == "gato") {
    console.log("Has escogido el perro");
} else if (mascota == "pajaro") {
    console.log("Has escogido el perro");
} else {
    console.log("Lo siento no tenemos esta mascota en stock");
}

if (mascota == "perro" || mascota == "gato" || mascota == "pajaro") {
    console.log("Has escogido el " + mascota);
}
let mascotas = ["perro", "gato", "pajaro"];
if (mascotas.includes("perro")) {
    console.log("Has escogido el " + mascotas[0]);
}