const newBookBtn = document.querySelector('#new-book-btn');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const myLibrary = [];

newBookBtn.addEventListener('click', () => {
    const formData = document.querySelector('#form-data');
    formData.style.display = 'block';
});

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;

}
addBookToLibrary()

document.querySelector('#form-data').addEventListener('submit', (event) => {
    event.preventDefault();
});