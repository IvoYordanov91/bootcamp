// Seleccionar todas las imágenes de los destinos turísticos y cambia su tamaño.
const imgs$$ = document.querySelectorAll("img");
for (let i = 0; i < imgs$$.length; i++) {
    imgs$$[i].style.width = "30%";
}
// Añadir un nuevo elemento hijo a una de las tarjetas de destino turístico.
const tarjetaLago$$ = document.querySelector(".tarjeta");
const myUl$$ = document.createElement("ul");
tarjetaLago$$.appendChild(myUl$$)
const myLi$$ = document.createElement("li");
myLi$$.textContent = "es un lago";
myUl$$.appendChild(myLi$$);

// Crear un nodo de texto y añadirlo como hijo de una de las tarjetas de destino turístico.
const tarjetas$$ = document.querySelectorAll(".tarjeta");
let newP$$ = document.createElement("p");
let textContent$$ = document.createTextNode("Me gustan las ciudadelas");
newP$$.appendChild(textContent$$);
tarjetas$$[1].appendChild(newP$$);
let peruCard = tarjetas$$[1];


// Obtener el padre de un elemento específico y cambiar su estilo.
let parent = tarjetas$$[1].parentNode;
parent.style.border = "2px solid red";

// Eliminar un nodo hijo específico de una de las tarjetas de destino turístico.
let enlacePeru;
for (child of peruCard.children ) {
    child.tagName == "A" ? (enlacePeru = child) : false
}
peruCard.removeChild(enlacePeru);

// Seleccionar todos los elementos de una etiqueta específica (por ejemplo, todos los párrafos) y cambiar su estilo.
let parrafos$$ = document.querySelectorAll('p');
for (parrafo of parrafos$$) {
    parrafo.style.color = "#bf1525";
}

// Acceder a los nodos hermanos de un elemento específico y modificar su contenido.
//console.log(peruCard.parentNode.children);
for ( let card of peruCard.parentNode.children) {
    card != peruCard ? card.style.backgroundColor = "grey" : false
}
const hasPreviousSibling = (elem) => {
    elem.previousElementSibling == null ? elem.innerHTML += '<p>Se ha modificado</p>' : false;
};
const hasNextSibling = (elem) => {
    elem.nextElementSibling == null ? elem.innerHTML += '<p>Se ha modificado</p>' : false;
};


for (let i = 0; i < tarjetas$$.length; i++) {
    hasPreviousSibling(tarjetas$$[i]);
    hasNextSibling(tarjetas$$[i]);
}


// Crear un nuevo atributo y añadirlo a una de las tarjetas de destino turístico.
peruCard.setAttribute("title", "peru");

// Obtener el valor de un atributo específico en una de las tarjetas de destino turístico.
console.log(peruCard.getAttribute("title"));

// Agregar una clase a una tarjeta de destino turístico.

// Crear un mensaje de bienvenida en la página de destino turístico.

// Obtener el nombre del nodo raíz del documento HTML (que debería ser "HTML").

// Acceder al primer hijo de la lista de tarjetas de destino turístico.

// Obtener el valor de un nodo de texto dentro de una de las tarjetas de destino turístico.

// Cambiar el color de fondo de una de las tarjetas de destino turístico.
