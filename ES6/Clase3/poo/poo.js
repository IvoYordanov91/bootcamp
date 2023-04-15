//Programación Orientada a Objetos (POO) -> Es una forma un poco diferente de programar, que es más cercana a como vemos las cosas 
//en la vida real. 

//Coche: En la vida real tiene una serie de características como pueden ser el modelo, el color, la matrícula, el dueño, 
//la velocidad máxima,... Y tambien tiene una serie de acciones, como por ejemplo aparcar, acelerar, frenar,...

//En el esquema de POO el coche serie el objeto, las propiedades - las características y los metodos serian las
//funcionalidades como frenar o acelerar. 

//const coche = {nombre: ..., matricula: ...}

//Las clases son instanciaciones de objetos. Esto quiere decir que la definición que se da de un objeto es la clase. 
//Cuando estamos programando un objeto y definimos sus carácteristicas y funcionalidades lo que estamos haciendo realmente es programar una clase. 

//Coche -> Clase
//Caracteristicas: Marca, Color, Tipo, Precio, Puertas
//Acciones: Acelerar, Frenar, Encender, Apagar. 


// La herencia (que a veces se le llama subclase), es un método por el cual se crea una clase que tiene los métodos y los atributos
// de la clase de la que hereda. Lo bueno de esto es la capacidad para poder definir atributos y métodos nuevos que luego se aplican
// a los atributos y métodos heredados. 

class Vehiculo{
    ruedas;
    nombre;
    constructor(ruedas, nombre) {
        this.ruedas = ruedas;
        this.nombre = nombre;
    }
    emitirSonido(){
        console.log("Piiiiii");        
    }
}

class Moto extends Vehiculo {
    tieneSidecar;
    constructor(ruedas, nombre, tieneSidecar){
        super(ruedas, nombre);
        this.tieneSidecar = tieneSidecar;
    }
}

class Coche extends Vehiculo {
    marca;
    color;
    tipo;
    precio;
    puertas;
    estaEncendido;

    constructor(marca, color, tipo, precio, puertas, ruedas, nombre){
        super(ruedas, nombre);
        this.marca = marca;
        this.color = color;
        this.tipo = tipo;
        this.precio = precio;
        this.puertas = puertas;        
    }
    acelerar(){
        console.log("Estoy acelerando");
    }
    frenar(){
        console.log("Estoy frenando");
    }
    encender() {
        if (!this.estaEncendido) {
            this.estaEncendido = true;
            } else {
                console.log("Ya está encendido!");
            }
    }
    apagar() {
        if (this.estaEncendido) {
        this.estaEncendido = false;
        } else {
            console.log("Ya está apagado!");
        }
    }
}
const audi = new Coche("Audi", "Rojo", "R8", 50000, 2, 4, "Coche");
const bmw = new Coche("BMW", "Azul", "X3", 40000, 4, 4, "Coche");

console.log(audi);
console.log(bmw);

audi.acelerar();
audi.frenar();
bmw.acelerar();

audi.encender();
audi.encender();
console.log(`¿El ${audi.marca} está encendido? ${audi.estaEncendido}`);
audi.apagar();
audi.apagar();



const ducati = new Moto(2, "Moto", true);
console.log(ducati);
ducati.emitirSonido();