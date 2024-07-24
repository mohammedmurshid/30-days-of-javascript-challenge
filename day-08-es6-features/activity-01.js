// -------- Template Literal --------
// Task 01
const person = {
  name: "John Doe",
  age: 25,
  gender: "male",
  place: "Bangalore",
};
const personDetails = `This is ${person.name}, ${person.age} old ${person.gender} from ${person.place}`;

console.log(personDetails);

// Task 02
const multiLineString = `
this is a multiline string created using template literal in javascript.
it is a part of 30 days of javascript challenge by Hitesh Choudhary on chaicode.com.
`;

console.log(multiLineString);
