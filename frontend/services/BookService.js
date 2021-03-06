class BookService {
    constructor() {
        this.URI = "http://localhost:3000/api/books";
    }

    async getBook() {
        const response = await fetch(this.URI)
        const books =  await response.json()
        return books
    }

    async postBook (book) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: book
        })
        const data = await res.json();
        console.log(data)
    }

    async deleteBook (bookid) {
        const res = await fetch(`${this.URI}/${bookid}`, {
            headers: {
                'Content-Type' : 'application/json'
            },
            method: 'DELETE'
        })
        const data = await res.json();
        console.log(data)
    }

}

export default BookService