//Funciones de orden superior
//Vamos a ver ciertas funciones que toman una función como argumento, y se la aplican a cada elemento de una colección

//MAP -> Recibe una función y se la aplica a cada valor de un array, devolviendo el array resultante de aplicar esta función
// a cada uno de los elementos. 
// Tenemos que tener en cuenta que siempre va a devolver la misma longitud que el array que la llama, pero es un array nuevo, el original no se modifica. 
let arr = [
    {
        id: 1,
        name: "Bill"
    },
    {
        id: 2,
        name: "Ted"
    }
];
let result = arr.map((person) => ({
    identificador: person.id,
    nombre: person.name
}));
console.log(result);

//Quieres crear un nuevo array que contenga solamente los nombres
//de las pizzas, pero en mayusculas
// y con un emoji de pizza al final. 
const pizzas = [
    {name: "Margherita", toppings: ["tomato sauce", "mozzarella", "basil"]},
    {name: "Pepperoni", toppings: ["tomato sauce", "mozzarella","pepperoni"]},
    {
        name: "Hawaian",
        toppings: ["tomato sauce", "mozzarella", "ham", "pineapple"]
    },
    {
        name: "Vegetarian",
        toppings: ["tomato sauce", "mozzarella", "mushrooms", "peppers", "onions"]
    }
];
//Iteracción 1 => Indice 0 del array pizzas -> pizza = {name: "Margherita", toppings: ["tomato sauce", "mozzarella", "basil"]} -> Se le aplica la 
// función y el nuevo array tendra el indice 0, el elemento pizza al aplicar la función.  
// Iteración 2 -> ...
// Iteración 3 -> ...
// Iteración 4 -> ...
// Al final, lo que devuelve el método map() es un nuevo array de la misma longitud que pizzas, pero habiendo aplicado la función que recibe
// como argumento a cado uno de los elementos de pizzas

const pizzaNames = pizzas.map((pizza) => pizza.name.toUpperCase() + "🍕");
console.log(pizzaNames);

//Filter: Se utiliza para filtrar los elementos de una matriz según un criterio especifico. Este metodo devuelve una nueva matriz
//que contiene solo los elementos que satisfacen la condición. 

var pilots = [
    {id: 2, name: "Wedge Antilles", faction: "Rebels"},
    {id: 8, name: "Ciena Ree", faction: "Empire"},
    {id: 40, name: "Iden Versio", faction: "Empire"},
    {id: 66, name: "Thane Kyrell", faction: "Rebels"},
];

let rebels = pilots.filter((pilot) => pilot.faction === "Rebels");
console.log(rebels);

let empire = pilots.filter((pilot) => pilot.faction === "Empire");
console.log(empire);

//Quieres crear un nuevo array que contenga solamente las películas con una valoración mayor o igual a 9.
const movies = [
    {title: "The Godfather", rating: 9.2},
    {title: "The Shawshark Redemption", rating: 9.3},
    {title: "The Dark Knight", rating: 9.0},
    {title: "Pulp Fiction", rating: 8.9},
    {title: "Forrest Gump", rating: 8.8},
    {title: "The Matrix", rating: 8.7},
];

const topRatedMovies = movies.filter((movie) => movie.rating >= 9);
console.log(topRatedMovies);

//Find() -> Se utiliza para buscar el primer elemento en una matriz que cumpla con un criterio de búsqueda específico. Si no encuentra nada, devuelve undefined.
const found = movies.find((pelicula) => {
    console.log(`Estoy comprobando la película ${pelicula.title}`);
    return pelicula.title === "Pulp Fiction";
});
console.log(found);

//Queremos encontrar la persona más joven de la lista

const people = [
    { name: "John", age: 25, profession: "teacher" },
    { name: "Alice", age: 30, profession: "engineer" },
    { name: "Bob", age: 27, profession: "developer" },
    { name: "Mary", age: 35, profession: "designer" },
    ];
function joven(arr) {
   let edadMasJoven = arr[0].age;
   for (let person of arr) {
    if (edadMasJoven > person.age) edadMasJoven = person.age;
   }
   return edadMasJoven;
}
let edadTemprana = joven(people);
const youngest = people.find((person) => edadTemprana == person.age);
console.log(youngest);

const youngestPerson = people.find(
    (person) => person.age === Math.min(...people.map((person) => person.age))
);
console.log(youngestPerson);