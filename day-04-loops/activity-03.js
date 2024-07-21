// Task 05
function printNumbers() {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 5);
}

printNumbers();

// Task 06
function findFactorial(number) {
  let factorial = 1;
  let i = number;
  do {
    factorial *= i;
    i--;
  } while (i > 0);
  return factorial;
}
const result = findFactorial(10);
console.log(result);
