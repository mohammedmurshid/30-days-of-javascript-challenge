// -------- Spread and Rest Operators  --------
// Task 05
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2024,
};

const numbersPlusSomeNumbers = [
  ...numbers,
  book,
  123213,
  41455,
  "someRandomString",
  `${book.title} of ${book.author}`,
];
console.log("🚀 numbersPlusSomeNumbers:", numbersPlusSomeNumbers);

// Task 06
const sumOfManyNumbers = (...manyNumbers) => {
  let total = 0;
  for (let number of manyNumbers) {
    total += number;
  }
  return total;

  // same approach using for loop
  //   for (let i = 0; i <= manyNumbers.length; i++) {
  //     total += i;
  //   }
  //   return total;
};

const total = sumOfManyNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("🚀 total:", total);
