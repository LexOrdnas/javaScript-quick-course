// Constructor Function

// Criar um objeto postagem
// titulo, mensagem, autor, visualizações, comentarios, estaaovivo

function Posts(title, message, author) {
    this.title = title,
    this.message = message,
    this.author = author,
    this.views = 0,
    this.comments = [],
    this.isAlive = false
}

let posts = new Posts('a', 'b', 'c')

console.log(Posts);