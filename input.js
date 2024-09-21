const prompt = require('prompt-sync')({sigint: true});

const num1 = prompt('enter first number : ');
const num2 = prompt('enter second number : ');

console.log('first umber + second number : ')
console.log(Number(num1)+Number(num2));