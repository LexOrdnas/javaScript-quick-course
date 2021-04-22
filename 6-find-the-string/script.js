// Criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto

const film = {
    title: 'Vingadores',
    year: 2018,
    director: 'Robin',
    character: 'Thor'
}

viewProperties(film)

function viewProperties(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
        console.log(prop, obj[prop]);
}