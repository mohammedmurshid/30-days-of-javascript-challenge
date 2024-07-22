// Task 09
const callMeXTimes = (me, x) => {
  for (let i = 0; i < x; i++) {
    me();
  }
};

const iamUnstoppable = () => console.log("I'm unstoppable today...");

callMeXTimes(iamUnstoppable, 5);

// Task 10
const higherOrderFun = (function1, function2, value) => {
  const result1 = function1(value);
  const result2 = function2(result1);
  return result2;
};

const multiplyByTwo = (x) => x * 2;
const addFive = (x) => x + 5;

const finalResult = higherOrderFun(multiplyByTwo, addFive, 10);
console.log(finalResult);
