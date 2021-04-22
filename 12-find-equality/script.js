// Igualdade de Objetos

function Address(street, city, zip) {
    this.street,
    this.city,
    this.zip
}

const address1 = new Address('a','b','c')
const address2 = new Address('a','b','c')
const address3 = address1

function theyAreTheSame(address1, address2) {
    // Comparar se as propriedades são iguais
    return address1.street == address2.street &&
        address1.city == address2.city &&
        address1.zip == address2.zip
}

console.log(theyAreTheSame(address1, address2));

function hasTheSameMemoryAddress(address1, address2) {
    // Comparando se a referência do objeto aponta para o
    // mesmo local na memória
    return address1 === address3
}

console.log(hasTheSameMemoryAddress(address1, address2));