// Velocidade máxima de até 70
// A cada 5 km acima do limite você ganha 1 ponto na ctr
// Math.Floor()
// Caso pontos maior que 12 -> "Carteira Suspendida"

checkSpeed(120)

function checkSpeed(velocity) {
    const maximumSpeed = 70
    const kmPerPoint = 5
    if (velocity <= maximumSpeed)
        console.log('OK')
    else {
        const ponts = Math.floor(((velocity - maximumSpeed) / kmPerPoint))
        if (ponts >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos', ponts);
    }
}