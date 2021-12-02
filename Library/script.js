async function getBooks() {
    const response = await fetch("books.json")
    const books = await response.json()
    return books
}

getBooks().then(books => {
    console.log(books)
    document.body.innerHTML = `<div class="book-collection">
                                ${renderBooks(books)}
                            </div>`
})

function renderBooks(books) {
    return books.map(book => {
        return `<div class="book">
                    <div class="spine"></div>
                    <div class="title"><a href=${book.wiki} target=/>${book.title}</a></div> 
                    <div class="author">${book.author}</div>
                    <div class="footer"></div>
                </div>
                `                                    
    }).join("")
}