// Task 01
const number1 = 10;
const number2 = -5;

if (number1 > 0) {
  console.log(`${number1} is positive`);
} else {
  console.log(`${number1} is negative`);
}

// Taks 02
const person1 = {
  name: "John",
  age: 17,
};

const person2 = {
  name: "Doe",
  age: 25,
};

if (person1.age >= 18) {
  console.log(`${person1.name} is eligible for voting`);
} else {
  console.log(`${person1.name} is not eligible for voting`);
}

if (person2.age <= 18) {
  console.log(`${person2.name} is not eligible for voting`);
} else {
  console.log(`${person2.name} is eligible for voting`);
}
