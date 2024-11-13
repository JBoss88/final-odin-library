const newBookBtn = document.querySelector('#new-book-btn');
const formData = document.querySelector('#form-data');
const submit = document.querySelector('#submit');
const libraryContainer = document.querySelector('#library');

newBookBtn.addEventListener('click', () => {
    const removeMain = document.querySelector('.remove');
    removeMain.style.display = 'block';
});

const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

submit.addEventListener('click', () => {
    document.querySelector('#form-data').addEventListener('submit', (event) => {
        event.preventDefault();
    });
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);

    addBookToDom(newBook);

    function addBookToDom(book) {
        const card = document.createElement('div');
        card.classList.add('card');

        const titleEl = document.createElement('p');
        titleEl.textContent =  `Title: ${book.title}`;

        const authorEl = document.createElement('p');
        authorEl.textContent = `Author: ${book.author}`;

        const pagesEl = document.createElement('p');
        pagesEl.textContent = `Pages: ${book.pages}`;

        const readEl = document.createElement('p');
        readEl.textContent = `Read: ${book.read === true ? 'Yes' : 'No'}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', () => {
            card.textContent = '';
        });

        libraryContainer.append(card);
        card.append(titleEl, authorEl, pagesEl, readEl, deleteBtn);
    }
});

