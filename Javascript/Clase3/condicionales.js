//Condicionales -> Sentencias de control de flujo. Permiten ejecutar bloques de código diferentes dependiendo de si se cumple una condición
//if (condicion) {
    //Bloque de código si se cumple la condicion
//}
//else if(condicion2) {
    //Se ejecuta si la primera condición es falsa y esta es verdadera
//}
//else {
//Se ejecuta si las anteriores son falsas
//}

//La condición es una expresión que devuelve un valor booleano (verdadero o falso)
//Cuando tenemos IF(0) o IF(1) se sustituye 0 por falso y 1 por verdadero
const age = 20;
if (age < 18) {
    console.log("Menor de 18");
} else if (age >= 18 && age < 67) {
    console.log("Mayor de edad y no jubilado");
} else {
    console.log("Mayor de edad y jubilado");
}

/////////////////////////////////////////////////////////////////////////
let x = "0";
let y = 0;
if (x == y) {
    console.log("Igualdad verdadera");
}
if (x === y) {
    console.log("Igualdad estricta");
}
if (!x && !y) {
    console.log("Se ejecuta")
}

//Condicional ternario -> Funciona como un if..else. Permite ejecutar las condicionales de una manera más corta.
//condicion ? expresion verdadera : expresion falsa
edad = 18;
let esMayor = edad >=18 ? "Mayor de edad" : "Es menor de edad";

//Ternario multiples -> Cuando necesitamos evaluar más de una condición. Similar al if - else.. if - ... - else
let rangoEdad = age < 18 ? "Es menor de edad" : age >= 18 && age < 67 ? "Mayor de edad y no jubilado" : "Mayor de edad y jubilado";

//Switch Case -> Permite ejecutar diferentes bloques de código dependiendo del valor de una variable on una expresión.
//Más eficiente y legible que poner un montón de ifs cuando dependemos de un determinado valor.
//switch(variable) { // Evaluar
//case a:
    //Bloque de código
//    break;
//case b:
    //Bloque de código
//    break;
//default:
    //Bloque de código
//    break;
//} 

let color = "Amarillo";
switch(color){
    case "Azul":
        console.log("Azul");
        break;
    case "Rojo":
        console.log("Rojo");
        break;
    default:
        console.log("Ninguno de los colores");
        break;
}

let a = 1;
let b = 0;
let result;
switch(a+b){
    case 1:
        result = "Unidad";
        console.log(result);
        break;
    case 0:
        result = "Cero";
        console.log(result);
        break;
    default :
        result = "Ni 1 ni 0";
        console.log(result);
        break;
}