//Crea una aplicación que muestre el precio actual del Bitcoin en
//dolares estadounidenses (USD). Para esto, utiliza la API pública
//de Coindesk (https://api.coindesk.com/v1/bpi/currentprice/USD.json)
//y la función fetch() para hacer una solicitud GET y obtener los datos
//necesarios. Una vez que tengas los datos, muestra el precio actual
//del Bitcoin en la pantalla de la aplicación de forma clara y legible
//para el usuario. Además, agrega un botón de actualizar para que el usuario 
//pueda obtener el precio actualizado en cualquier momento. 
//Utiliza las promesas de fetch() para manejar la respuesta de la solicitud
//y cualquier error que se produzca. También, asegúrate de manejar
//adecuadamente cualquier excepción que pueda ocurrir 
//en la lógica de la aplicación.

const myP$$ = document.querySelector("#price");
const refreshBtn$$ = document.querySelector("#refresh-btn");

function getPrice(){
fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json")
  .then((response) => response.json())
  .then((data) => {
    myP$$.innerHTML = `<p>El precio actual del bitcoin en dolares estadounidenses (USD) es de ${data.bpi.USD.rate_float.toFixed(2)}$.</p>`
  })
  .catch((error) => console.log(`Mira este error: ${error}`));
}
getPrice();

refreshBtn$$.addEventListener("click", () =>
  getPrice()
);