//Los eventos son acciones que ocurren en la página web, como hacer click en un botón, mover el ratón, hacer scroll, cargar una página...
//Cuando se produce, se activa automáticamente cualquier acción que haya sido registrada para ese evento. 
function cardCaballo(){
    alert("Has pulsado la tarjeta del caballo");
}

function doScroll(){
    document.querySelector(".container").style.backgroundColor = "red";
}

//addEventListener: Es un método del DOM que se utiliza para registrar una función como manejadora de eventos de un elemento HTML.
//elementoHTML.addEventListener("click", funcion)
const cardGallina$$ = document.getElementById("gallina");
cardGallina$$.addEventListener('click', () => alert("Has pulsado la tarjeta de la gallina"));

//Eventos del ratón
//click: Botón izquierdo del ratón
//mouseover: Pasar el ratón sobre un elemento
//mouseout: Sacar el ratón de un elemento


//Eventos del teclado
//keypress: pulsar una tecla
//keyup: soltar una tecla
//input: leer a tiempo real lo que se está escribiendo en un input

document.addEventListener('keypress', function (event){
    switch (event.key){
        case "i":
          alert("Nuestra granja está en Villaverde");
          break;
        case "v":
          document.getElementById("vaca").style.backgroundColor = "red";
          document.getElementById("caballo").style.backgroundColor = "white";
          document.getElementById("gallina").style.backgroundColor = "white";
          break;
        case "c":
          document.getElementById("vaca").style.backgroundColor = "white";
          document.getElementById("caballo").style.backgroundColor = "red";
          document.getElementById("gallina").style.backgroundColor = "white";
          break;
        case "g":
          document.getElementById("vaca").style.backgroundColor = "white";
          document.getElementById("caballo").style.backgroundColor = "white";
          document.getElementById("gallina").style.backgroundColor = "red";
          break;
      }
});

//document.addEventListener("keyup", function (event) {
//console.log(event);
//console.log(`Se ha soltado la tecla ${event.key}`);
//});

var input$$ = document.querySelector("input");
input$$.addEventListener("input", (event) => console.log(event.target.value));

