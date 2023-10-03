let books = [
    {
        title: "Book 1",
        author: "Author 1",
        image: "https://images.pexels.com/photos/3696663/pexels-photo-3696663.jpeg?auto=compress&cs=tinysrgb&w=100&h=750&dpr=1"
    },
    {
        title: "Book 2",
        author: "Author 2",
        image: "https://images.pexels.com/photos/3696663/pexels-photo-3696663.jpeg?auto=compress&cs=tinysrgb&w=100&h=750&dpr=1"
    },
];


const container = document.querySelector('.container');
const newBookButton = document.getElementById('new-book-button');
const newBookForm = document.getElementById('new-book-form');
const bookForm = document.getElementById('book-form');

function createBookElement(book) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
        <img src="${book.image}" alt="${book.title} width="20">
        <p>${book.title}</p>
        <p>${book.author}</p>
    `;
    return bookDiv;
}

function createShelf() {
    const shelfDiv = document.createElement('div');
    shelfDiv.classList.add('shelf');
    return shelfDiv;
}

function renderBooks() {
    container.innerHTML = ''; // Clear previous content
    let currentShelf = null;

    books.forEach((book, index) => {
        if (index % 4 === 0) {
            currentShelf = createShelf();
            container.appendChild(currentShelf);
        }

        const bookElement = createBookElement(book);
        currentShelf.appendChild(bookElement);
    });
}

// Initial rendering of books
renderBooks();


newBookButton.addEventListener('click', () => {
    newBookForm.style.display = 'block';
});
bookForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the user-inputted values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const image = document.getElementById('image').value;

    // Create a new book object
    const newBook = {
        title,
        author,
        image,
    };

    // Add the new book to your array of books
    books.push(newBook);

    // Render the updated list of books
    renderBooks();

    // Clear the form fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('image').value = '';

    // Hide the form again
    newBookForm.style.display = 'none';
});