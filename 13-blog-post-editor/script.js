// Objeto Postagem de Blog
// Eu quero que você crie neste exercício um objeto de postagem
// de blog que vai conter as seguintes propriedades
// postagem
/*
title
message
author
views
comments
    (author, message)
isAlive
*/

let post = {
    title: 'a',
    message: 'b',
    author: 'c',
    views: 10,
    comments: [
        { author: 'a', message: 'b' },
        { author: 'a', message: 'b' }
    ],
    isAlive: true
}

console.log(post);