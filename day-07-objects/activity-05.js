// Task 08
const book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2024,
};

for (let property in book) {
  console.log(`${property}: ${book[property]}`);
}
// Task 09
const bookKeys = Object.keys(book);
const bookValues = Object.values(book);

console.log("bookKeys:", bookKeys);
console.log("bookValues:", bookValues);
