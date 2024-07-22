// Task 01
function oddOrEven (number) {
    if (number%2 == 0){
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

oddOrEven(11);

// Task 02
function squareOfNumber (number) {
    return number * number
}

const result = squareOfNumber(10);
console.log(result);