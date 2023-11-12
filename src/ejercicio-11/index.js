// Ejercicio 11: Promise.allSettled()
// Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza Promise.allSettled() para obtener información sobre el estado de todas las Promises.
const promise1 = new Promise((resolve) =>
    setTimeout(() => resolve(1), 1000))
const promise2 = new Promise((resolve, reject) =>
    setTimeout(() => reject('Error en Promise 2'), 2000))
const promise3 = new Promise((resolve) =>
    setTimeout(() => resolve(3), 1000))

Promise.allSettled([promise1, promise2, promise3])
    .then((resultados) => {
        console.log('Estado de todas las Promises', resultados)
    })

// Resultado esperado:
// Estado de todas las Promises [
//  { status: 'fulfilled', value: 1 },
//  { status: 'rejected', reason: 'Error en Promise 2' },
//  { status: 'fulfilled', value: 3 }
// ]