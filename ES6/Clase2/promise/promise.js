//Una promesa es un objeto que representa la terminación o el fallo de una operación asíncrona.

//Las promesas se consumen mediante 'then' y 'catch'.

//El then es usado para manejar el resultado exitoso de una Promise(es decir cuando es resuelta). Este then toma como argumento una función de callback,
//Que se ejecutará una vez que la promise sea resuelta.

//fetch("https://jsonplaceholder.typicode.com/todos/1")
//.then((response) => response.json())
//.then((data) => console.log(data))
//.catch((error) => console.error(error));

let tiempoEspera = Math.random() * 3000;
const sumar = (a, b) => {
    const promesa = new Promise((acepta, rechaza) => {
        if(!a || !b){
            rechaza("Tienes que mandar los dos números");
        } else {
            setTimeout(() => acepta(a+b), tiempoEspera);
        }
    })    
    return promesa;
}
let result;
sumar(3, 4)
.then((loQueSaleDelAcepta) => {
result = loQueSaleDelAcepta;
console.log("Resultado asíncronia" + result);
})
.catch((loQueSaleDeRechaza) => {
    throw new Error(loQueSaleDeRechaza);
});

console.log(result);


let suma = sumar(3, 4);
console.log(suma);

const addItem = (item, list) => {
    const promise = new Promise((resolve, reject) => {
        if(!list){
            reject("No existe la lista");
        } else {
            setTimeout(function(){
                list.push(item);
                resolve(list);
            }, 2000);
        }
    })
    return promise;
}
const list = ["Rojo", "Azul", "Verde"];
addItem("Amarillo", list).then((list) => {
    console.log(`El listado es ${list}`);
})
.then((data) => console.log(data))
.catch((err) => {
    throw new Error(err);
});

const contadorTareas = (funciona) => {
    const promise = new Promise((resolve, reject) => {
        if(!funciona){
            reject("No funciona el servidor ahora mismo");
        } else {
            setTimeout(function(){
                resolve([() => "Tarea1", () => "Tarea2", () => "Tarea3"]);
            }, 2000);
        }
    });
}
contadorTareas(1)
.then((data) => console.log(data))
.catch((err) => {
    throw new Error(err);
});