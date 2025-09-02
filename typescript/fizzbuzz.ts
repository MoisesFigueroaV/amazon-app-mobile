/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

// Recorremos los números del 1 al 100
for (let numero = 1; numero <= 100; numero++) {
    // Primero verificamos si es múltiplo de 3 Y 5 (15, 30, etc.)
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("fizzbuzz");
    } 
    // Si no, verificamos si es múltiplo de 3
    else if (numero % 3 === 0) {
        console.log("fizz");
    } 
    // Si no, verificamos si es múltiplo de 5
    else if (numero % 5 === 0) {
        console.log("buzz");
    } 
    // Si no cumple ninguna condición, imprimimos el número
    else {
        console.log(numero);
    }
}