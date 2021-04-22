// Criar uma função que exibe a quantidade de *
// que aquela linha possui

displayAsterisks(5)

function displayAsterisks(lines) {
//    let standard = ''
//    for (let line = 1; line <= lines; line++) {
//        standard += '*'
//        console.log(standard);
//    }
    for (let line = 1; line <= lines; line++) {
        let standard = ''
        for (let i = 0; i < line; i++) {
            standard += '*'
        }
        console.log(standard);
    }
}