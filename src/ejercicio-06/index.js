// Ejercicio 6: Llamada a una API con fetch()
// Utiliza el método fetch() para obtener datos de una API de tu elección. Imprime los datos resultantes en la consola.
// API rickandmortyapi
fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
        console.log(data) // Muestro la información en la consola
    })
