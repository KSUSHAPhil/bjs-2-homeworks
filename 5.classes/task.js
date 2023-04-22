class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        this.state *= 1.5;
    }

    set state(currentState) {
        if (currentState < 0 ) {
            this._state = 0;
        }
        else if (currentState > 100) {
            this._state = 100;
        } else {
            this._state = currentState;
        }
    }

    get state () {
        return this._state;
    }

    class Magazine extends PrintEditionItem {
        constructor (name, releaseDate, pagesCount) {
            super(name, releaseDate, pagesCount)
            this.type = "magazine";
        }
    }

    class Book extends PrintEditionItem{
        constructor (name, releaseDate, pagesCount) {
            super(name, releaseDate, pagesCount)
            this.type = "book";
            this.author = author;
        }
    }

    class NovelBook extends Book{
        constructor (name, releaseDate, pagesCount) {
            super(name, releaseDate, pagesCount)
            this.type = "novel";
        }
    }

    class FantasticBook extends Book{
        constructor (name, releaseDate, pagesCount) {
            super(name, releaseDate, pagesCount)
            this.type = "fantastic";
        }
    }

    class DetectiveBook extends Book{
        constructor (name, releaseDate, pagesCount) {
            super(name, releaseDate, pagesCount)
            this.type = "detective";
        }
    }

    class Library{
        constructor (name) {
            this.name = name;
            this.books = [];
        }
    }

    addBook(book) {
        if (book.state > 30 ) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(
        (book) => book.name === bookName);
        if (index !== -1) {
            return this.books.splice(index, 1)[0];
        } else {
            return null;
        }
    }
}