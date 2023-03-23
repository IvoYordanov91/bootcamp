//Crea una función flecha que tome como parámetro un número y una potencia, y retorne el resultado de elevar el número a la potencia:
//Math.pow(numero, potencia)

const elevar = (numero, potencia) => Math.pow(numero, potencia);

console.log(elevar(2, 3));

const sumarArrays = (miArray) => {let suma = 0; miArray.forEach(value => {suma += parseInt(value);}); return suma;};

console.log(sumarArrays([1,2,3,4,5]));