export default class Book {
    constructor(title, author, isRead=false) {
        this.title = title;
        this.author = author;
        this.isRead = isRead;
    }

    setTitle(newTitle) {
        this.title = newTitle;
    }

    getTitle(){
        return this.title;
    }

    setAuthor(newAuthor) {
        this.author = newAuthor;
    }

    getAuthor() {
        return this.author;
    }

    setIsRead(set) {
        this.isRead = set;
    }

    getIsread() {
        return this.isRead;
    }

    changeIsread() {
        this.isRead = !this.isRead;
    }

}