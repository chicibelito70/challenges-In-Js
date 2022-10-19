 /*
 * Reto #0
 * EL FAMOSO "FIZZ BUZZ"
 * Dificultad: FÁCIL
 * Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

 function final(){

    for (var i=0; i<=100; i++){
        var divisibleByThree=i%3==0
        var divisibleByFive=i%5==0
        if (divisibleByThree && divisibleByFive){
            console.log("fizzbuzz");
        }else if (divisibleByThree){
            console.log("fizz");
        }else if (divisibleByFive){
            console.log("Buzzz");
        }else{
            console.log(i)
        }
    }
 }





