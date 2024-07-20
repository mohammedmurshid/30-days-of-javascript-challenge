// Task 07
let year = 1700;

// Method 1
if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not leap year`);
}

// Method 2 { using ternary operator }
(year % 4 == 0 && year % 100 !== 0) || year % 400 == 0
  ? console.log(`${year} is a leap year`)
  : console.log(`${year} is not leap year`);
