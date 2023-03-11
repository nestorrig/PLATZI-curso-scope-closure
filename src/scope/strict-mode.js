/// without strict mode
pi = 3.1416;
console.log(pi);

function without() {
    return pi = 3.1416;
}
console.log(without());

/// with strict mode
"use strict";
pi = 3.1416;
console.log(pi); // pi is not defined

function without() {
    "use strict";
    return pi = 3.1416;
}
console.log(without()); // pi is not defined

// El modo estricto tiene varios cambios en la semántica normal de JavaScript:

// 1. Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.

// 2. Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones:
    // a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.

// 3. Prohíbe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript.

///NOTA: El modo estricto se aplica a un script completo o a funciones individuales. No se aplica a bloques entre corchetes {}; intentar aplicarlo en tales contextos no hace nada.