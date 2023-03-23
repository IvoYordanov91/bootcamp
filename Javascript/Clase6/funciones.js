//Funciones nombradas: Definidas por un nombre y pueden ser expresadas o declaradas.

//Función declarada:
function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3));

//Función expresada
const multiply = function(a, b){
    return a * b;
}
console.log(multiply(3, 2));

//Funciones anónimas: son funciones que no tienen nombre, y se definen como una expresión. Se utilizan mayormente como argumentos de otras funciones
function doFunction() {
    (function(){
        console.log("Hola");
    })();
}
doFunction();

const personas = [
    {nomre: "Ana", edad: 32},
    {nomre: "Juan", edad: 24},
    {nomre: "Maria", edad: 28},
    {nomre: "Pedro", edad: 38},
]
personas.sort(function (a, b){
    return a.edad - b.edad;
})
console.log(personas);

//Funciones constructoras: Son funciones que se utilizan para crear objetos con un conjunto de propiedades y métodos.

function person(name, age){
    this.name = name;
    this.age = age;
}
const person1 = new person("Javier", 30);
const person2 = new person("Ricardo", 50);
console.log(person1);

//Funciones flecha: Son una forma más concisa de escribir funciones anónimas. Se definen utilizando la sintaxis de una flecha

//(param 1, param2, ...) => {/*Bloque de código*/}

const square = (x) => { return x * x };

const double = (x) => x * 2;

const triple = x => x * 3;

console.log(square(3));
console.log(double(4));
console.log(triple(5));

personas.sort((a, b) => a.edad - b.edad);

const saludar = a => `Hola, ${a}! Bienvenido`;

console.log(saludar("Ivo"));