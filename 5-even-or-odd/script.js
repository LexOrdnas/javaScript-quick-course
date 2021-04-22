// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou impar

displayType(8)

function displayType(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0)
            console.log(i, 'PAR')
        else
            console.log(i, 'IMPAR')
    }
}