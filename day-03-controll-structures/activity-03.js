// Task 04
const day = 3;

switch (day) {
  case 1:
    console.log("Hey... it is Sunday");
    break;
  case 2:
    console.log("Hey... it is Monday");
    break;
  case 3:
    console.log("Hey... it is Tuesday");
    break;
  case 4:
    console.log("Hey... it is Wednesday");
    break;
  case 5:
    console.log("Hey... it is Thursday");
    break;
  case 6:
    console.log("Hey... it is Friday");
    break;
  case 7:
    console.log("Hey... it is Saturday");
    break;
  default:
    console.log("Error");
    break;
}

// Task 05
const score = 65;
switch (true) {
  case score > 90:
    console.log("Grade: A");
    break;
  case score >= 80:
    console.log("Grade: B");
    break;
  case score >= 70:
    console.log("Grade: C");
    break;
  case score >= 60:
    console.log("Grade: D");
    break;
  case score >= 50:
    console.log("Grade: E");
    break;
  case score <= 50:
    console.log("Grade: F");
    break;

  default:
    break;
}
