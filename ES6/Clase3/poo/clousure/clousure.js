//Un clousure es una función que tiene acceso a variables de su entorno, incluso después de que la función externa haya finalizado su ejecución
//y su contexto haya sido destruido. 
//Para simplificar es una combinación de una función y un ámbito de variables en el que se creó la función. 
//function ejemplo(atributo){
//    return function(atributo){
//        //Bloque de código
//    }
//}
//let atributo = "A";
//let funcionAntigua = ejemplo(atributo);

//atributo = "B";
//let funcionNueva = ejemplo(atributo);

function changePokemon(pokemon){
    return function(attack){
        console.log(`El pokemon ${pokemon} usa el ataque ${attack}.`);
    }
}

function multiplicaPor(numero){
    return function(multiplicador){
        return multiplicador * numero;
    }
}

var pokemonAgua = changePokemon("Squirtle");
var pokemonFuego = changePokemon("Charmander");
pokemonAgua("Pistola Agua");
pokemonFuego("Llamarada");

var triple = multiplicaPor(3);
var doble = multiplicaPor(2);
var mitad = multiplicaPor(0.5);

console.log(triple(5));
console.log(doble(5));
console.log(mitad(5));