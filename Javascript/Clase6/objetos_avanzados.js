//Los objetos almacenan conjuntos de datos, funciones y otras entidades con un nombre clave.
let avenger = {};
let avenger2 = new Object();

console.log(avenger2);

avenger.name = "Iron Man";
avenger.age = 42;
avenger["poder"] = "Traje";

const key = "poder";
console.log(avenger[key]);

delete avenger.name;
console.log(avenger);

let avenger3 = {
    name: "Spiderman",
    age: 19,
    power: "Trepar muros",
    "born in Usa": true,
};

console.log(avenger3["born in Usa"]);

//Propiedades calculadas: forma de definir propiedades dinámicas que se calculan en tiempo de ejecución.
//Que el nombre de la propiedad se puede calcular mediante una expresión, en vaz de una cadena estática. Mediante [nombrePropiedad]

//const miObjeto = {
//    [nombrePropiedad]: valorPropiedad,
//};
let idioma = "es";
const traduccion = {
    en: "Hello",
    fr: "Bonjour",
    [idioma]: "Hola",
}
console.log(traduccion[idioma]);

//Reducir propiedades
const makeUser = (name, age) => {return {name, age};};
console.log(makeUser("Ricardo", 20));

const name = "Luis";
let usuario = {
    name,
    edad: 45,
};

//Operador in: Devuelve true si existe una propiedad con la key que le damos
//nombreKey in nombreObjeto;

"name" in usuario ? console.log(usuario.name) : console.log("No existe la propiedad");
"oficio" in usuario ? console.log(usuario.oficio) : console.log("No existe la propiedad");

//Palabra this -> Es una palabra clave que se utiliza para referirse al objeto actual donde nos encontramos.
// Si se utiliza en un contexto global toma el valor de window(cuando estamos en un navegador).

let user = {
    name: "John",
    age: 30,
    sayHi() {
        console.log(`Hola soy ${this.name}`);
    },
};
user.sayHi();

let user2 = {
    name: "Esmeralda",
    sayHI() {
        console.log(`Hola soy ${this.name}`);
    }
};
user2.sayHI();

function animal(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
    this.saludar = function() {
        console.log(`Hola soy un ${especie} y me llamo ${nombre}`);
    };
}
const tigre = new animal("Juantio", "tigre");
tigre.saludar();

const oso = new animal("Yogi", "oso");
oso.saludar();
console.log(oso);
console.log(typeof oso);