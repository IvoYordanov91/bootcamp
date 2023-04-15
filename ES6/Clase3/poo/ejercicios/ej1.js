//Crea dos clases en Javascript, una llamada Student (estudiante)
//y otra llamada Teacher(profesor). Ambas clases deben tener las
// siguientes propiedades:
//name: El nombre de la persona.
//age: La edad de la persona. 
// La clase Studen tambien debe tener la propiedad grade(nota).
// La clase Teacher tambien debe tener la propiedad subject(materia).
// Ambas clases deben tener un método llamado bio que imprima en la consola
// una descripción de la persona con el siguiente formato:

//Mi nombre es [name], tengo [age] años y soy [student/teacher].
//Para la clase Student, la descripción debe incluir tambien la nota. 

//Mi nombre es [name], tengo [age] años, soy un estudiante y mi nota es [grade].

//Para la clase Teacher, la descripción debe incluir la materia que enseña:
//Mi nombre es [name], tengo [age] años, soy un profesor y enseño [subject].
//Por último, crea un objeto de cada clase y llama al
//método bio() en cada uno de ellos para verificar que funciona correctamente.

class Person {
    age;
    name;
    ocupation;

    constructor(age, name, ocupation){
        this.age = age;
        this.name = name;
        this.ocupation = ocupation;
    }
}

class Teacher extends Person{
    subject;
    constructor(age, name, ocupation, subject){
        super(age, name, ocupation);
        this.subject = subject;
    }
    bio(){
        console.log(`Mi nombre es ${this.name}, tengo ${this.age} años, soy ${this.ocupation} y enseño ${this.subject}.`);
    }
}

class Student extends Person{
    nota;
    constructor(age, name, ocupation, nota){
        super(age, name, ocupation);
        this.nota = nota;
    }
    bio(){
        console.log(`Mi nombre es ${this.name}, tengo ${this.age} años, soy ${this.ocupation} y mi nota es ${this.nota}.`);
    }
}

let ricardo = new Teacher(36, "Ricardo", "profesor", "Javascript");
let ivo = new Student(31, "Ivo", "estudiante", 8);

ricardo.bio();
ivo.bio();