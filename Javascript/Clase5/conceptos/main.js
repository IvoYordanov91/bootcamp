//Los dolares se ponen como buenas practicas por el que vea mi codigo sepa que estoy haciendo referencia a un elemento de html, un nodo. 
//En estos casos estoy cogiendo un elemento con etiqueta x, ej: h1, p, un array de ps

//Query Selector
//En esta constante cojo el elemento con etiqueta h1
const myTitle$$ = document.querySelector("h1");

console.log(myTitle$$);

// En esta constante cojo el elemento con etique p
const myP$$ = document.querySelector("p");

console.log(myP$$);

//Query Selector All
//Permite cojer todos los elementos correspondientes a una etiqueta, definiendo un tipo de dato array
const myPs$$ = document.querySelectorAll("p");

console.log(myPs$$[1]);

//*******Clase ********

const myClassP$$ = document.querySelector(".class");
console.log(myClassP$$);

const myClassPs$$ = document.querySelectorAll(".class");
console.log(myClassPs$$);

//****** ID ******/
const myIdP$$ = document.querySelector("#id");
console.log(myIdP$$);