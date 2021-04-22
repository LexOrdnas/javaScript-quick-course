// Criar função para mostrar os números primos

// Primos
// Compostos

// Ex: 10, 11
// 10 (1 ou por ele mesmo)
// 10 - 1, 2, 4, 6, 10
// 11 - 1, 11

displayPrimeNumbers(15)

function displayPrimeNumbers(limit) {
    for (let number = 2; number <= limit; number++) {
        if (primeNumber(number)) console.log(number);
    }    
}

function primeNumber(number) {
        for (let divider = 2; divider < number; divider++) {
            if (number % divider === 0) {
                return false
            }
        }
        return true
}