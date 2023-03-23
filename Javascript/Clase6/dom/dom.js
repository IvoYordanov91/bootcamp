//El DOM es una representación de un archivo HTML como un árbol de nodos jerárquico que permite que el HTML sea facilmente manipulable. 
//El DOM define una serie de objetos, métodos y propiedades.
//Objetos
//HTMLCollection: objeto de JS que representa una colección de elementos HTML.
//NodeList: A diferencia de HTMLCollection, puede contener además de elementos HTML atributos, nodos de texto, nodos de comentario...

//Búsqueda
//getElementById() -> Devolver el elemento con id específico.
const miDiv$$ = document.getElementById("prueba")
console.log(miDiv$$);

//getElementsByName -> Devuelve una colección de elementos con un name específico.
let parrafo$$ = document.getElementsByName("parrafo");
console.log(parrafo$$);

//getElementsByTagName(tagname): Devuelve todos los elementos con un nombre de tag específico. 
let pTag$$ = document.getElementsByTagName("p");
console.log(pTag$$);

//getElementsByClassName(cassname): Devuelve los elementos con un nombre de clase específico. 
let estilo$$ = document.getElementsByClassName("estilo");
console.log(estilo$$);

//getAttribute(attributeName): Devolver el valor del atributo con nombre attributeName
console.log(estilo$$[0].getAttribute("class"));
console.log(estilo$$[0].getAttribute("id"));

//querySelector(selector): Devuelve un único elemento que corresponde con el selector, ya sea por id, por tag o por clase. 
console.log(document.querySelector("#prueba"));
console.log(document.querySelector(".estilo"));

//querySelectorAll(selector): Devuelve un array con los elementos que corresponden con el selector, ya sea id o clase. 
console.log(document.querySelectorAll(".estilo"));

//Manipulación

//createElement(name): Crea un elemento HTML con el nombre que le pasemos como parámetro. 
let newDiv = document.createElement("div");
console.log(newDiv);

//createTextNode(text): Crea un nodo de texto que puede ser añadido dentro de un elemento HTML
let textContent = document.createTextNode("Hola Mundo!");
console.log(textContent);

//appendChild(node): Nos permite hacer hijo a un elemento. 
newDiv.appendChild(textContent);
console.log(newDiv);
miDiv$$.appendChild(newDiv);

//insertBefore(new, target): Insertar un elemento nuevo antes de un determinado elemento. 
let miSecondDiv$$ = document.querySelector("#contenedor");
miSecondDiv$$.insertBefore(newDiv, estilo$$[1]);

//removeAttribute(attribute): Nos permite eliminar el attributo con el nombre attribute del nodo desde el que invocamos el método
estilo$$[0].removeAttribute("id");
console.log(estilo$$[0]);

//removeChild(child): Elimina el nodo hijo que se indica con child.
miSecondDiv$$.removeChild(miSecondDiv$$.children[1]);

//for (let i = miSecondDiv$$.children.length -1; i >= 0; i--) {
//    miSecondDiv$$.removeChild(miSecondDiv$$.children[i]);
//}
console.log(miSecondDiv$$.children);

//remove(): Elimina un nodo y su descendencia
//miSecondDiv$$.remove();
//console.log(miSecondDiv$$);

//replaceChild(new, old): Reemplaza un nodo por otro que se indica. 
miSecondDiv$$.replaceChild(newDiv, estilo$$[0]);
console.log(miSecondDiv$$);