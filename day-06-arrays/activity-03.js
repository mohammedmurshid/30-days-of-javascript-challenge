// Task 07
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubledNumbers = numbers.map((number) => number * 2);

console.log(numbers);
console.log(doubledNumbers);

// Task 08
const evenNumbers = numbers.filter((number) => number % 2 == 0);
console.log(evenNumbers);

// Task 09
const total = numbers.reduce((acc, curr) => acc + curr);
console.log("total:", total);
