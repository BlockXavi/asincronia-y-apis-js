// Ejercicio 3: async/await

// Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que diga "Operación completada". Utiliza async/await.
async function operacionAsincronica() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return 'Operación completada'
}

// Defino la función que lanzará la función anterior
// Por qué esta función es asincrónica? Para mantener los tiempos de espera
// Porque al involucrar a una función asincrónica con retardo de 3000
// ejecutaría la Promise en estado pending
async function ejecutarOperacion() {
    const resultado = await operacionAsincronica() // resultado será el string 'operación completada'
    console.log(resultado)
}

// Ejecuto la operación
ejecutarOperacion()