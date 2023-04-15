//Imagina que tienes un objeto que representa un personaje de videojuego
// y quieres extraer sus habilidades para poder usarlas más fácilmente
// en tu código el objeto se ve así:
const player = {
  name: "Mario",
  lives: 3,
  abilities: {
    jump: "Super Jump",
    attack: "Fireball",
    defense: "Mushroom",
  },
};

//Tu tarea es utilizar la sintaxis de desestructuración para extraer las
//habilidades del jugador en tres constantes distintas para imprimir un mensaje que diga algo como:
// "Mario tiene la habilidad de saltar muy alto con su Super Jump, puede lanzar bolas de fuego con su Fireball y se protege con su mushroom"
