// Ejercicio 4: Manejo de errores con Promises
// Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir "Error: Promise rechazada".
const miPromiseRechazada = new Promise((resulve, reject) => {
    setTimeout(() => {
        reject('Promise rechazada')
    }, 2000)
})

// Defino la gestión de los errores con el método .catch
miPromiseRechazada.catch((error) => {
    console.log('Error: ', error)
})
