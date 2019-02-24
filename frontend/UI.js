/* Services */
import BookService from './services/BookService'
const bookService = new BookService()
import {format} from 'timeago.js'

class UI {
  async renderBooks() {
    const books = await bookService.getBook();
    const booksCardsContainer = document.getElementById("books-cards");
    booksCardsContainer.innerHTML = "";

    if (books.length == 0 ) {
      const div = document.createElement("div");
      div.className = "";
      div.innerHTML = `
        <p>Noo hay datos</p>
      `
      booksCardsContainer.appendChild(div);
    }
    books.forEach(book => {
      const div = document.createElement("div");
      div.className = "";
      div.innerHTML = `
                <div class="card mb-3 p-4" >
                    <div class="row">
                        <div class="col-md-4" >
                            <img src="http://localhost:3000${
                              book.imagePath
                            }" alt="${book.title}" class="img-fluid" >
                        </div>
                        <div class="col-md-8" >
                            <div></div>
                            <div class="card-block px-2" >
                                <h4 class="card-title" >${book.title}</h4>
                                <p class="card-text" >${book.author}</p>
                                <a href="#" class="btn btn-danger delete" _id="${
                                  book._id
                                }" >X</a>
                            </div>
                        </div>
                        </div>
                    <div class="card-footer mt-4" >
                        ${format(book.created_at)}
                    </div>
                </div>
            `;
      booksCardsContainer.appendChild(div);
    });
  }

  async addNewBook(book) {
    await bookService.postBook(book);
    this.clearBookForm();
    this.renderBooks();
  }

  clearBookForm() {
    document.getElementById("bookForm").reset();
  }

  renderMessage(message, colorMessage, secondsToRemove) {
    const div = document.createElement('div')
    div.className = `alert alert-${colorMessage} message`

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".col-lg-4");
    const bookForm = document.querySelector(".card");

    container.insertBefore(div, bookForm)
    setTimeout(() => {
      document.querySelector('.message').remove()
    }, secondsToRemove)

  }

  async deleteBook(book_id) {
      await bookService.deleteBook(book_id)
      this.renderBooks()
  }
}

export default UI