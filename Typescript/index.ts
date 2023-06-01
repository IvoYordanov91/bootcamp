import { Alumno, Bootcamp } from './models';

let myName: string = 'Mario';

const colors: string[] = ['blue', 'yellow', 'red'];

colors[0] = 'pink';
colors.push('orange');

let alumnos: Alumno[] = [{
    name: "Pepe",
    age: 33,
    isUgly: false
}];

alumnos.push({
    name: 'asadsa',
    age: 3434,
    isUgly: false
});

let fsd202302pt:Bootcamp = {
    fullName: '202302fsd-pt-hib',
    year: 2023,
    type: 'PT',
    studentList: alumnos
};

fsd202302pt.studentList.forEach(element => console.log(element));

const sumAges = (list: Alumno[]): number => {
let sum: number = 0;
list.forEach(element => {
    sum += element.age
});
return sum;
};

const result = sumAges(fsd202302pt.studentList);
