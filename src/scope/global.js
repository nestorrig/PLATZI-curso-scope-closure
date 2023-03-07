//Variables

var a; //declarar
var b = "b" // declarar y asignar
b = "bb" // reasignar
var a = "aa" //redeclarar

/// GLOBAL SCOPE
var fruit = "Apple";
console.log(fruit);

function bestFruit() {
    console.log(fruit);;
}
bestFruit();

/// EVITAR COMETER ESTE ERROR
function countries() {
    country = "México";
    console.log(country);
}
// console.log(country); aqui no existe
countries();
console.log(country); // despues de ejecutar la función ya existe

// ASINGAR UNA VARIABLE SIN DECLARARLA ANTES PUEDE HACER QUE
// SE CONVIERTA EN UNA VARIABLE GLOBAL POR ERROR