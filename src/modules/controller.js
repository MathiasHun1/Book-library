import Book from "./book";
import Storage from "./storage";

function createNewBook(title, author, isRead) {
    const titleRegex = /^[A-Za-z0-9\s]{4,50}$/;;
    const authorRegex = /^[A-Za-z0-9\s]{4,50}$/;;
    const isReadValue = isRead;
    const findBook = Storage.getBook(title) || '';

    if (isRead === 'checked') {
        
    }
    if(!titleRegex.test(title)) {
        alert('Use only normal characters, length have to be between 4-50');
        return
    }

    if(!authorRegex.test(author)) {
        alert('Use only normal characters, length have to be between 4-50');
        return
    }

    if (findBook.title === title) {
        alert('A book with this title already added');
        return
    }

    console.log(findBook.title)
    return new Book(title, author, isReadValue);
}

class CreateNewBook {
    constructor() {
        this.titleRegex = /^[A-Za-z0-9\s]{4,50}$/;;
        this.authorRegex = /^[A-Za-z0-9\s]{4,50}$/;;
    }

    testTitle(title) {
        return this.titleRegex.test(title)
    }

    testAuthor(author) {
        if(!this.authorRegex.test(author)) {
            return 'Use only normal characters, length have to be between 4-50';
        }
    }

    create(title, author, isRead) {
        return new Book(title, author, isRead);
    }
}

const newBookCreator = new CreateNewBook()

export { createNewBook, newBookCreator }