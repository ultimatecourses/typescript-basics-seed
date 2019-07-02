function calculateSum(message, ...arg) {
    console.log(message);
    return arg.reduce((prev, next) => prev + next);
}

const sum = [1, 2, 3, 4];

console.log(calculateSum("Hello", sum));