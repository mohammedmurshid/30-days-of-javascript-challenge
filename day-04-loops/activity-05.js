// Task 08
function skipFive() {
  for (i = 1; i <= 10; i++) {
    if (i == 5) continue;
    console.log(i);
  }
}

skipFive();

console.log("---------------");

// Task 09
function stopAtSeven() {
  for (i = 1; i <= 10; i++) {
    if (i == 7) break;
    console.log(i);
  }
}

stopAtSeven();
