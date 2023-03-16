// ? Buenas prácticas para usar hoisting
// * No utilices var en las declaraciones de variables.
// * Escribe primero las funciones y luego su invocación.

console.log(nombre) // undefined
var nombre = "Andres" 

// Hoisting
var nombre = undefined
console.log(nombre)
nombre = "Andres"
// * Hoisting en scope de bloque
if (true){
    var saludo = "hola"
    let despedida = "chao"
}

console.log(saludo)
console.log(despedida)
//Hoisting
var saludo = undefined

if (true){
    saludo = "hola"
    let despedida = "chao"
}

console.log(saludo) 
// "hola"
console.log(despedida) 
// ReferenceError: despedida is not defined
// * Hoisting en funciones
console.log( saludar() )

function saludar() {
    return "Hola"
}
// Hoisting
function saludar() {
    return "Hola"
}

console.log( saludar() ) // "Hola"
// * Hosting en funciones asignadas a variables
console.log( saludar() )

var saludar = function saludar() {
    return "hola"
}
// Hoisting
var saludar = undefined

console.log( saludar() ) // TypeError: saludar is not a function

saludar = function saludar() {
    return "hola"
}