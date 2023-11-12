// Ejercicio 7: Llamada a una API con Axios
// Realiza una llamada a una API utilizando Axios. Muestra los datos obtenidos en la consola.
// Ya había ejecutado 'npm install'
const axios = require('axios') // No sé lo que estoy haciendo...

axios
// Conexion con la API mediante el método .get
.get('https://rickandmortyapi.com/api/character/?gender=Male')
    // En el caso de conexión muestro los datos
    .then((response) => {
        console.log(response.data)
    })
    // En el caso de error muestro el error
    .catch((error) => {
        console.error(error)
    })