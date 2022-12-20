const readline = require('readline-sync');
console.log("Substraction of Two Numbers");
const a = +readline.question('Please enter the value of a: ');
const b = +readline.question('Please enter the value of b: ') ;
console.log(`Value of ${a} is ${typeof a}`);
console.log(`Value of ${b} is ${typeof b}`);
const subtract = a-b;

console.log(`SUM OF ${a} minus ${b} = ${subtract}`);