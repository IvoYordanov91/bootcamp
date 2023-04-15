//Frontend: Es la parte visible y con la que el usuario final interactua en una aplicación web.
//Utilizaremos lenguajes como JS, HTML y CSS

//Backend: Es la parte "invisible" que se encarga de proveer, manejar y procesar los datos de la aplicación
//Suele estar compuesto por un servidor, una base de datos y aplicaciones que procesan y entregan la información
//a traves de protocolos como HTTP/S

// JS por defecto corre en un úncio hilo (las instrucciones van una detrás de otra).

//Necesitamos un enlace entre el cliente (por ejemplo Chrome, Edge, Firefox) y el servidor. Para eso vamos a utlizar una API de JS
//llamada fetch que nos permite realizar este enlace (enlaces mediante AJAX).

//fetch(url).then((response) => {
//Bloque de código
//}
//).catch((error) => {
//Bloque de código
//});
let bulbasaur;
//fetch("https://pokeapi.co/api/v2/pokemon/")
//  .then((response) => response.json())
//  .then((data) => {
    //console.log(data);
//    bulbasaur = data.results[0];
//    fetch(bulbasaur.url)
//      .then((response) => response.json())
//      .then((data) => {
//        console.log(data);
//        console.log(data.weight);
//      });
//  })
//  .catch((error) => console.log(`Mira este error: ${error}`));

//Quiero que salga de los 9 primeros la frase "El pokemon numero "num" se llama "nombre" y pesa "kg""
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=9")
  .then((response) => response.json())
  .then((data) => {
    for(pokemon of data.results){
        fetch(pokemon.url)
        .then((response) => response.json())
        .then((data) => {
          console.log(`El pokemon con el número ${data.id} se llama ${data.name} y pesa ${data.weight} kg.`);  
        });
    }
  })
  .catch((error) => console.log(`Mira este error: ${error}`));
