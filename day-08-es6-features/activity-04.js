//  -------- Default Parameters  --------
// Task 07
function divide(numerator, denominator = 2) {
  return numerator / denominator;
}

const divideTen = divide(10);
console.log("🚀 divideTen:", divideTen);

const divide500By5 = divide(500, 5);
console.log("🚀 divide500By5:", divide500By5);
