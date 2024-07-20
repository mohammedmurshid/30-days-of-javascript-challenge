// Task 01
const number1 = 10;
const number2 = -5;

function checkNumber(number) {
  if (number > 0) {
    console.log(`${number} is positive`);
  } else if (number < 0) {
    console.log(`${number} is negative`);
  } else {
    console.log(`${number} is zero`);
  }
}

checkNumber(number1);
checkNumber(number2);

// Taks 02
const person1 = {
  name: "John",
  age: 17,
};

const person2 = {
  name: "Doe",
  age: 25,
};

function checkVotingEligibility(person) {
  if (person.age >= 18) {
    console.log(`${person.name} is eligible for voting`);
  } else {
    console.log(`${person.name} is not eligible for voting`);
  }
}

checkVotingEligibility(person1);
checkVotingEligibility(person2);
