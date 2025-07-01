// assignment 1
const bookshelf = document.getElementById('bookshelf');
const loadBooksButton = document.getElementById('loadBooks');

function addBook() {
    const book = document.createElement('div');
    book.textContent = `Book ${bookshelf.children.length + 1}`;
    bookshelf.appendChild(book);
    loadBooksButton.removeEventListener('click', addBook);
}

loadBooksButton.addEventListener('click', addBook);

// assignment 2
const booksList = document.getElementById('booksList');
const loadMoreBooksButton = document.getElementById('loadMoreBooks');

loadMoreBooksButton.addEventListener('click', () => {
    const fragment = document.createDocumentFragment();
    const startingIndex = booksList.children.length + 1;

    for (let i = 0; i < 5; i++) {
        const newBook = document.createElement('li');
        newBook.textContent = `Book ${startingIndex + i}`;
        fragment.appendChild(newBook);
    }

    booksList.appendChild(fragment);
});

// assignment 3
const booksList1 = document.getElementById('booksList1');
const addBooksButton = document.getElementById('addBooks');

const bookTitles = [
    'Exciting Space Adventures',
    'Mystical Fantasy Quests',
    'Historical Time Travels'
];

addBooksButton.addEventListener('click', () => {
    const fragment = document.createDocumentFragment();

    bookTitles.forEach(title => {
        const li = document.createElement('li');
        li.textContent = title;
        fragment.appendChild(li);
    });

    booksList1.appendChild(fragment);
});
