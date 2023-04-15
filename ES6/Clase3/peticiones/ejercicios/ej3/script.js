//URL para buscar un pokemon por nombre -> https://pokeapi.co/api/v2/pokemon/${pokemonName}

const form$$ = document.querySelector("form");
const pokemonInfo$$ = document.querySelector("#pokemon-info");
const pokemonName$$ = document.querySelector("#pokemon");

function getPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => {
        if(!response.ok){
            throw new Error("No se ha encontrado el pokemon");
        }
        return response.json();
    })
      .then((data) => {
        const pokemon = {
            name: data.name,
            type: data.types[0].type.name,
            image: data.sprites.front_default,
        };
        const html = `<h2>${pokemon.name}</h2><img src="${pokemon.image}" alt="${pokemon.name}"></img><p>Type: ${pokemon.type}</p>`;
        pokemonInfo$$.innerHTML = html;
      })
      .catch((error) => {
        pokemonInfo$$.innerHTML = `<p>Error: ${error.message}</p>`;
    });
    }
form$$.addEventListener("submit", (e) => {
    e.preventDefault();
    getPokemon(pokemonName$$.value.toLowerCase());    
});