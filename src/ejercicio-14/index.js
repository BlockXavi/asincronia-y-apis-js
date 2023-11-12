// Ejercicio 14: Encadenamiento de Promises con manipulación de datos
// Realiza una llamada a una API con fetch() y, después de recibir los datos, encadena Promises para realizar varias operaciones de manipulación de datos, como filtrar, mapear o reducir los resultados.
// Estos ejercicios deberían ayudar a los alumnos a practicar y reforzar los conceptos clave de la clase sobre Promises, async/await y llamadas a APIs en JavaScript.
fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
        return data.results.map((character) => character.name.toUpperCase())
    })
    .then((nombres) => {
        console.log('Nombres en mayúsculas: ', nombres)
    })
    .catch((error) => {
        console.error('Error: ', error)
    })
    