//ASYNC-AWAIT: Una forma más fácil de trabajar con Promises. Con async-await vamos a poder escribir código asíncrono con
//una sintaxis más parecida al código sincrono.

//async se utiliza para declarar una función asíncrona que devuelve una Promise
//await se utiliza para indicar que la ejecución del código debe esperar hasta que un promise se resuelva.

//const myFunction = async () => {
//  var result = await functionAsincrona();
//};

//async function myFunction() {
//  var result = await functionAsincrona();
//}

//async function miFuncion() {
//  try {
//    const result1 = await functionAsincrona1();
//    const result2 = await functionAsincrona2();
//    const result3 = await functionAsincrona3();
//    return { result1, result2, result3 };
//  } catch (error) {
//    console.log(error);
//  }
//}

/////////////////////////////////////////

const addItem = (item, list) => {
  const promise = new Promise((resolve, reject) => {
    if (!list) {
      reject("No existe el array");
    }
    setTimeout(function () {
      list.push(item);
      resolve(list);
    }, 2000);
  });
  return promise;
};
const processFilm = async (film, list) => {
    try{
        const result = await addItem(film, list);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
};


const filmography = ["Raising Arizona", "Fargo", "Barton Fink"];
processFilm("The big Lewoski", filmography);
processFilm("O Brother, Where Art Thou", filmography);
processFilm("The Ladykillers", filmography);
