// Task 03
function sumOfNumbers() {
  let sum = 0;
  let i = 1;
  while (i <= 10) {
    sum += i;
    i++;
  }
  return sum;
}

const result = sumOfNumbers();
console.log(result);

// Task 04
function tenToOne() {
  let i = 10;
  while (i >= 1) {
    console.log(i);
    i--;
  }
}

tenToOne();
