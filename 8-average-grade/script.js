// Exercicio Nota Escolar
// Obter a média a partir de um array

// 0-59:   F
// 60-69:  D
// 70-79:  C
// 80-89:  D
// 90-100: A

const array = [ 70, 70, 80 ]

console.log(studentMedia(array))

function studentMedia(grades) {
    const mean = calculateAverage(grades)

    if (mean < 59) return 'F'
    if (mean < 69) return 'D'
    if (mean < 79) return 'C'
    if (mean < 89) return 'B'
    return 'A'
}

function calculateAverage(array) {
    let sum = 0
    for (let value of array) {
        sum += value
    }
    
    return sum/(array.length)

}