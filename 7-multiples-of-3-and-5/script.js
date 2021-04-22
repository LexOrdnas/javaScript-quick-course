// Criar função somar que retorna a
// soma de todos os múltiplos de 3 e 5

sum(10)

function sum(limit) {
    let multipleOf3 = 0
    let multipleOf5 = 0

    for (i = 0; i <= limit; i++) {
        if (i % 3 === 0)
            multipleOf3 += i
            if (i % 5 === 0)
            multipleOf5 += i
    }
    console.log(multipleOf3 + multipleOf5);
}