// Task 07
const returnSomething = (para1, para2 = "Let's go...") => {
  return para1 + para2;
};

const something = returnSomething("Hey...");
console.log(something);

// Task 08
const greetMe = (name, age = 25) => {
  return `Hello ${name}, age: ${age}`;
};

const greeting = greetMe("John");
console.log(greeting);
