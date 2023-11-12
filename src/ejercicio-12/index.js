// Ejercicio 12: async/await en un bucle
// Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una lista de elementos uno por uno.
async function procesarElementos(elementos) {
    for (const elemento of elementos) {
        await new Promise((resolve) =>
            setTimeout(resolve, 1500))
        console.log('Procesando elemento: ', elemento)
    }
}

// Defino el número de Pronises que se ajecutarán
const elementos = [1, 2, 3, 4]
procesarElementos(elementos)
