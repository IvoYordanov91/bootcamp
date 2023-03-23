"use strict";
//Hoisting: Es una particularidad que consiste en que con indpendencia de donde esté declarada una variable en una función,
// esta es movida al inicio de la misma. 

function example() {
    console.log(x);
    var x = 10;
}

example();

var nombre = "Ricardo";

function saludar() {
    console.log(nombre);
    var nombre = "Jose";
    console.log(nombre);
}
saludar();