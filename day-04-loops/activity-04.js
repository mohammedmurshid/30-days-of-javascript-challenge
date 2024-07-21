// Task 07
function printStar(rows) {
  for (i = 1; i <= rows; i++) {
    let star = "";
    for (j = 1; j <= i; j++) {
      star += "* ";
    }
    console.log(star)
  }
}

printStar(5);
