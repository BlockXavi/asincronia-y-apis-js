// Ejercicio 8: Manipulación de datos de una API
// Después de realizar una llamada a una API con fetch(), utiliza el método .then() para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo, mostrar solo los nombres que comiencen con "A").
fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
        // Manipulo la información (data.results)
        const filteredCharacters = data.results.filter((character) => character.name.startsWith('M'))
        console.log(filteredCharacters)
        // console.log(data)
    })
