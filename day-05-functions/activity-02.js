// Task 03
const findMax = function (num1, num2) {
  const maxNum = num1 > num2 ? num1 : num2;
  return maxNum;
};

const maximumNumber = findMax(200, 5);
console.log(maximumNumber);

// Task 04
const concatString = function (str1, str2) {
  return str1 + " " + str2;
};

const concatedString = concatString("Hello", "There...");
console.log(concatedString);
