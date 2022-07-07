fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))
//retorna uma Promise

//Operações no banco
//Método GET
fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
    .then(response => response.json()
    .then(json => console.log(json)))//Retorna uma Promise

//Metodo POST
fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache',
})
    .then(response => response.json()
    .then(json => console.log(json)))//Retorna uma Promise