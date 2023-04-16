const main$$ = document.querySelector("main");
const input$$ = document.querySelector("input");
const get = async () => {
  const response = await fetch("https://starwars-server.vercel.app/characters");
  const res = await response.json();
  return res.data.characters;
};
const mapCharacters = (characters) => {
  return characters.map((character) => ({
    nombre: character.name,
    imagen: character.image,
    rol: character.role,
  }));
};
const searchCharacter = (arr, pattern) => {
  let filteredCharacters = arr.filter((character) =>
    character.nombre.toLowerCase().includes(pattern.toLowerCase())
  );
  draw(filteredCharacters);
};
const takeInput = (characters) => {
  input$$.addEventListener("input", () =>
    searchCharacter(characters, input$$.value)
  );
};

const draw = (characters) => {
  main$$.innerHTML = "";
  for (let character of characters) {
    const div$$ = document.createElement("div");
    div$$.innerHTML = `<h2>${character.nombre}</h2>
    <img src="${character.imagen}" alt="${character.nombre}"></img>
    <p>${character.rol}</p>
    `;
    main$$.appendChild(div$$);
  }
};

const init = async () => {
  const characters = await get();
  const mapedCharacters = mapCharacters(characters);
  draw(mapedCharacters);
  takeInput(mapedCharacters);
};
init();
