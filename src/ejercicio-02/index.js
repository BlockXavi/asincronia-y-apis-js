// Ejercicio 2: Promises
// Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise resuelta" cuando se cumpla.
const miPromise = new Promise((resolve, reject) => {
    setTimeout(() => { //Función que establece el tiempo de pausa en milisegundos
       resolve('Promise resuelta') 
    }, 3000)
})

miPromise.then((resultado) => {
    console.log(resultado)
})