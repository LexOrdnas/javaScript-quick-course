// JavaScript - Objeto Endereço

// Criar um objeto endereço que contem:
// Rua
// Cidade
// CEP
// displayAddress(address)

let address = {
    street: 'a',
    city: 'b',
    zip: 'c'
}

function displayAddress(address) {
    for (let key in address)
    console.log(key, address[key])
}

displayAddress(address)