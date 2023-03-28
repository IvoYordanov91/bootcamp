//Propiedades de los nodos.
//-attributos: Nos va a devolver un objeto con todos los atributos que posee un nodo. 

const tarjetaLago$$ = document.querySelector(".tarjeta");
const imgLago$$ = tarjetaLago$$.querySelector("img");
const attrImgLago = imgLago$$.attributes;


console.log(tarjetaLago$$);
console.log(imgLago$$);
console.log(attrImgLago);

for (let i = 0; i < attrImgLago.length; i++) {
    console.log(attrImgLago[i].name + ":" + attrImgLago[i].value);
}

//Classname : Permite asignar o devolver el nombre de la clase que tenga el nodo que lo invoca. 
console.log(tarjetaLago$$.className);
//tarjetaLago$$.className = "tarjeta-destacada";
//console.log(tarjetaLago$$.className);

//ClassList : Listado de clases que tiene un nodo.
//A differencia de className, proporciona métodos para agregar, para verificar y para eliminar la presencia de clases. 
//Para agregar tenemos add(claseAñadir)
//Para eliminar tenemos remove(ClaseEliminar)
//Para verificar si un nodo tiene un clase o no, utilizamos contains(nombreClase) que nos devuelve true o false. 
//nodeName: Devuelve el nombre de un nodo HTML.

const containsClass = (nodo, className) => nodo.classList.contains(className) 
? console.log(`El elemento ${nodo.nodeName} tiene la clase ${className}`)
: console.log(`El elemento ${nodo.nodeName} no tiene la clase ${className}`);


tarjetaLago$$.classList.add("tarjeta-destacada");
console.log(tarjetaLago$$.classList);
containsClass(tarjetaLago$$, "tarjeta-destacada");
//console.log(tarjetaLago$$.classList.contains("tarjeta-destacada"));
tarjetaLago$$.classList.remove("tarjeta-destacada");
console.log(tarjetaLago$$.classList);
containsClass(tarjetaLago$$, "tarjeta-destacada");
//console.log(tarjetaLago$$.classList.contains("tarjeta-destacada"));

//id: Igual que className pero para el atributo id. 
console.log(tarjetaLago$$.id);
tarjetaLago$$.id = "lago-como";
console.log(tarjetaLago$$.id);

//innerHTML : la propiedad innerHTML es utilizada para obtener o establecer el contenido de un elemento HTML:
console.log(tarjetaLago$$.innerHTML);
const parrafoLargo$$ = tarjetaLago$$.querySelector("p");
parrafoLargo$$.innerHTML += "<p style='color: red'>Hemos añadido contentido</p>";

//nodeName : Devuelve el nombre del nodo, por ejemplo si estamos en un <div> devolvera DIV, en un <img> IMG...
//La differencia con tagName, es que tagName solo está disponible en los elementos HTML y nodeName está disponible en todos los nodos incluyendo comentarios, texto, elementos HTML.. 
//firstChild: Es mi propiedad que nos devuelve el primer nodo hijo del elemento que lo llama. 
//children[0] : Children nos devuelve una lista de elementos HTML, mientras que firstChild cualquier tipo de nodo. 

//console.log(parrafoLargo$$.nodeName);
//console.log(parrafoLargo$$.children[0]);
//console.log(parrafoLargo$$.firstChild.nodeName);
//console.log(parrafoLargo$$.firstChild.tagName);

//nodeValue: Devuelve el valor del nodo. Si es de tipo element devolvera null. 
console.log(parrafoLargo$$.firstChild.nodeValue);
console.log(parrafoLargo$$.nodeValue);

// - style: Permite insertar código CSS para editar el estilo de un elemento.
tarjetaLago$$.style.backgroundColor = "rgb(200,150,10,0.8)";
console.log(tarjetaLago$$.style);
tarjetaLago$$.style.borderColor = "2px solid red";
tarjetaLago$$.style.cursor = "pointer";

//textContent : Obtiene o inserta texto en un elemento.
console.log(parrafoLargo$$.textContent);
console.log(tarjetaLago$$.textContent);

//childNodes: Devuelve un array con los nodos hijos del nodo desde el que se le llama. 
console.log(tarjetaLago$$.childNodes);

//firstElementChild: Devuelve el primer elemento hijo. 
//LastElementChild: Devuelve el último hijo. 
console.log(tarjetaLago$$.lastChild);
console.log(tarjetaLago$$.lastElementChild);

//previousSibling: Nos devuelve el elemento hermando anterior
//nextSibling: Devuelve el elemento hermano posterior. 
console.log(parrafoLargo$$.previousElementSibling);
console.log(parrafoLargo$$.nextElementSibling)

//ownerDocument: Devuelve el nodo raiz donde se encuentra el nodo desde el que se llama. 
console.log(tarjetaLago$$.ownerDocument);

//parrentNode: Devuelve el nodo padre del elemento html el que se llama
console.log(tarjetaLago$$.parentNode);
let color = "#bf1525"
document.head.innerHTML += `<style> .tarjeta-destacada {
    background-color: ${color}
}
</style>`;
tarjetaLago$$.classList.add("tarjeta-destacada");