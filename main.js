const newBookBtn = document.querySelector('#new-book-btn');
const submit = document.querySelector('#submit');

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


newBookBtn.addEventListener('click', () => {
    const formData = document.querySelector('#form-data');
    formData.style.display = 'block';
});

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    myLibrary.push(new Book(title, author, pages, read));
    console.log(myLibrary)

}

function submitData() {
    submit.addEventListener('click', () => {
        addBookToLibrary()
    });
}
submitData()

document.querySelector('#form-data').addEventListener('submit', (event) => {
    event.preventDefault();
});