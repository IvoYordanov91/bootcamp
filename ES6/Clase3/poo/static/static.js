//Utilizaremos la palabra clave 'static' antes del nombre del método y tienen una cierta peculiaridad, que es que pueden ser llamados sin necesidad de crear una instancia de esa clase.
//Generalmente lo utilizaremos para crear clases de utilidades en nuestra aplicación
//class Ejemplo {
//    constructor(atributo){}

//    static metodoEjemplo(argumento){
        //Bloque de código
//    }
//}
//Ejemplo.metodoEjemplo();

class Utils{
    constructor(){}
    imprimirHola(){
        console.log("Hola");
    }
    static calculaEdad(fecha){
        const hoy = new Date();
        let edad = hoy.getFullYear() - fecha.getFullYear();
        if(hoy.getMonth() < fecha.getMonth()){
            edad--;
        }
        if(fecha.getMonth() === hoy.getMonth() && fecha.getDate < hoy.getDate()){
            edad--;
        }
        return edad;
    }
}

let fechaNacimiento = new Date(1998,6,16);
let utilidades = new Utils();
utilidades.imprimirHola();
let age = Utils.calculaEdad(fechaNacimiento);
console.log(age);