import Book from "./book";
export default class Storage {
    static saveBooksList(data) {
        localStorage.setItem('booksList', JSON.stringify(data))
    }

    static getBooksList() {
        if (localStorage.getItem('booksList')) {
            return JSON.parse(localStorage.getItem('booksList'));
        }
        else {
            return
        }
    }

    static clearBookslist() {
        localStorage.clear()
    }

    static addBookToList(book) {
        if (book instanceof Book) {
            const booksArray = Storage.getBooksList() || [];
            booksArray.push(book);
            Storage.saveBooksList(booksArray);
        } else {
            console.error('The provided argument is not an instance of the Book class.');
        }
    }

    static getBook(title) {
        const booksArray = Storage.getBooksList();
        return booksArray.find((item) => {
            return item.title === title;
        })
    }

    static getBookIndex(title) {
        const booksArray = Storage.getBooksList();
        return booksArray.findIndex((item) => {
            return item.title === title;
        })
    }

    static removeBookfromList (title) {
        const booksArray = Storage.getBooksList();
        const bookToDeleteIndex = Storage.getBookIndex(title);
        booksArray.splice(bookToDeleteIndex, 1);
        Storage.saveBooksList(booksArray);
    }

    static updateReadStatus (title) {
        const book = Storage.getBook(title);
        const bookIndex = Storage.getBookIndex(title);
        const updatedBook = new Book(book.title, book.author, book.isRead);
        updatedBook.changeIsread();
        const booksArray = Storage.getBooksList();
        booksArray[bookIndex] = updatedBook;
        Storage.saveBooksList(booksArray);
    }
}