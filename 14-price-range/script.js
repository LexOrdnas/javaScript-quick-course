// Faixa de Preço
// Crie um array de objetos de faixa de preço para que
// ela possa ser usada em um site igual o mercado livre

// Primeira opção
let range = [
    { tooltip: 'até R$ 700', min: 0, max: 700 },
    { tooltip: 'até R$ 700 á R$ 1000', min: 0, max: 1000 },
    { tooltip: 'até R$ 1000 ou mais', min: 1000, max: 999999999 },
]

// Segunda opção (Factory Function)
function createPriceRange(tooltip, min, max) {
    return {
        tooltip,
        min,
        max,
    }
}

let range2 = [
    createPriceRange('a', 1, 100),
    createPriceRange('b', 100, 1000),
    createPriceRange('c', 1000, 10000),
]

// Terceira opção (Constructor Function)

function priceRange(tooltip, min, max) {
    this.tooltip = tooltip,
    this.min = min,
    this.max = max
}

let range3 = [
    new priceRange('d', 10, 20),
    new priceRange('e', 20, 30),
    new priceRange('f', 30, 40),
]

console.log(range)
console.log(range2)
console.log(range3)