//Crea una aplicación web que muestre una lista de 5
//repositorios más populares de Github para un lenguaje de programación
//específico. Para esto, utiliza la API pública de GitHub
//(https://api.github.com/search/repositories?q=language:<<lenguaje>>&sort=stars&order=desc)
//y la función fetch() para hacer una solicitud GET con el lenguaje
//de programación específico como parámetro de consulta. 
//Una vez que tengas los datos, muestra los nombres y las descripciones
// de los 5 repositorios más populares en la pantalla de la aplicación de
// forma clara y legible para el usuario. Utiliza las promesas de fetch()
// para manejar la respuesta de la solicitud y cualquier error que se produzca. 
//Tambien, asegúrate de manejar adecuadamente cualquier excepción que pueda
//ocurrir en la lógica de la aplicación.
//<li><strong>nombre</strong>: descripción</li>

const repoList$$ = document.querySelector("#repo-list");

function getPopularRepos(language){
fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`)
  .then((response) => response.json())
  .then((data) => {
    let populares = data.items.slice(0, 5);
    let repoListItems = populares.map((popular)=> 
    `<li><strong>${popular.full_name}</strong>: ${popular.description}</li>`
    );
    repoList$$.innerHTML = repoListItems.join("");
  })
  .catch((error) => console.log(`Mira este error: ${error}`));
}
const res = prompt("Dime el lenguaje que quieres consultar:", "")
getPopularRepos(res);