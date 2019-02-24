import './styles/app.css'

import UI from './UI'

document.addEventListener('DOMContentLoaded', () => {
        const ui = new UI()
        ui.renderBooks()
})

document.getElementById("bookForm")
         .addEventListener('submit', e => {
        e.preventDefault()
        /*TODO: Arreglar */
        const title = document.getElementById('title').value
        const author = document.getElementById('author').value
        const isbn = document.getElementById('isbn').value
        const image = document.getElementById('image').files

        const formData = new FormData()
        formData.append('image', image[0])
        formData.append('title', title)
        formData.append('author', author)
        formData.append('isbn', isbn)

        const ui = new UI();
        ui.addNewBook(formData)
        ui.renderMessage('New Book Add', 'success', 3000)

        console.log(formData)
})

document.getElementById("books-cards").addEventListener('click', e => {
     if( e.target.classList.contains('delete') ) {
             const ui = new UI()
             ui.deleteBook(e.target.getAttribute('_id'))
             ui.renderMessage("Delete Book ", "danger", 2000);
     }
     e.preventDefault()
})