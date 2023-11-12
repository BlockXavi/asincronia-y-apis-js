// Ejercicio 9: Async/await con llamadas a APIs
// Crea una función asincrónica que realice una llamada a una API utilizando Axios y luego manipule los datos recibidos para mostrar información específica.
// No hay manipulación específica

// Defino el elemento axios como si la función/método 'require()' fuera su constructor (new)
const axios = require('axios')

async function obtenerDatosDeAPI() {
    
    // Controla la ejecución de los errores
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character/') //respuesta a la conexión con éxito
        const data = response.data.results // Guardamos en data el resultado a la respuesta a la API
        console.log(data)          // Mostramos los datos por pantalla
    } catch (error) {
        console.error(error)       // Mostramos el error si no hay conexión con la API (rejected)
    }
}

// Llamamos a la función
obtenerDatosDeAPI()
