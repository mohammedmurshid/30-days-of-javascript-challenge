// -------- Destructuring --------
// Task 03
const numbers = [343, "x", 53535, 3215, 3532, 2343];

// let number1, number2;
const [number1, number2 = 10] = numbers;
console.log("number1: ", number1);
console.log("number2: ", number2);

// Task 04
const book = {
  //   title: "Atomic Habits",
  author: "James Clear",
  year: 2024,
};

const { title: nameOfBook = "Title of Book", author: nameOfAuthor } = book;
console.log("title:", nameOfBook);
console.log("author:", nameOfAuthor);
