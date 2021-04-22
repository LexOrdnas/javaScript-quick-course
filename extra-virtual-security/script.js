// Faixa de Preço

function checkIn() {
    guestName = document.getElementById('name').value
    peopleInvited = ['Amanda', 'Edik', 'Vitoria', 'Taina', 'Marcos', 'Luis']
    if (peopleInvited.includes(guestName)) {
        document.getElementById('entryPermission').innerHTML = 'Você pode Entrar! 😁'
    } else {
        document.getElementById('entryPermission').innerHTML = 'Você não pode Entrar! 😡'
    }
}