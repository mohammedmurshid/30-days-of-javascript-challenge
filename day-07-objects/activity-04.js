// Task 07
const book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 1984,
  getBookDetails() {
    return `${this.title} published on ${this.year}`;
  },
};

const bookDetails = book.getBookDetails();
console.log(bookDetails);
