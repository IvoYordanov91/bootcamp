export interface Alumno {
    name: string;
    age: number;
    isUgly: boolean;
}

export class Vehicle {
    brand: string;
    start = () => {
        console.log("Arrancando");
    }
}

export class Car extends Vehicle {
    model: string;
}

export class Animal {
    private raza: string;
    protected tienePelo: boolean;
    public numPatas: number;
}

export interface Bootcamp {
    fullName: string;
    year: number;
    type: 'FT' | 'PT';
    studentList: Alumno[];
}