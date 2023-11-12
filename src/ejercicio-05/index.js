// Ejercicio 5: Encadenamiento de Promises
// Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados y mostrar el resultado final.

// Genero una función que se pueda aplicar a las tres Promise
// Define el valor y el retraso como argumentos de la misma función
function crearPromiseConRetraso(valor, retraso) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(valor)
        }, retraso)
    })
}

// Inicializamos 3 variables sin asignarte valor que serán los parámetros de la función
let numero1
let numero2
let numero3

crearPromiseConRetraso(1, 1000)
    .then((resultado1) => {
        console.log(resultado1) // Muestro por pantalla el 1 una vez resuelto el Promise
        numero1 = resultado1    // Asigno 1 a numero1 
        return crearPromiseConRetraso(2, 1500) // Lanzo la segunda Promise
    })
    .then((resultado2) => {
        console.log(resultado2) // Muestro por pantalla el 2 una vez resuelto el Promise
        numero2 = resultado2    // Asigno 2 a numero2
        return crearPromiseConRetraso(3, 2000) // Lanzo la tercera Promise
    })
    .then((resultado3) => {
        console.log(resultado3) // Muestro por pantalla el 3 una vez resuelto el Promise
        numero3 = resultado3    // Asigno 3 a numero3
        const suma = numero1 + numero2 + numero3 // Calculo el valor de suma(1 + 2 + 3 = 6)
        console.log('Suma: ', suma) // Muestro en pantalla el valor de suma
    })
