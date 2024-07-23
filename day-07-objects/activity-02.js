// Task 03
const book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2024,
  getBookDetails() {
    return `${book.title} by ${book.author}`;
  },
  updateBookYear(year) {
    book.year = year;
    return book;
  },
};

const bookDetails = book.getBookDetails();
console.log(bookDetails);

// Task 04
const updateBook = book.updateBookYear(2020);
console.log(updateBook);
