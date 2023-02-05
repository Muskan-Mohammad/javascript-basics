const readline = require('readline-sync');
console.log("Modular of Two Numbers");
const a = +readline.question('Please enter the value of a: ');
const b = +readline.question('Please enter the value of b: ') ;
console.log(`Value of ${a} is ${typeof a}`);
console.log(`Value of ${b} is ${typeof b}`);
const modular = a%b;

console.log(`SUM OF ${a} modular ${b} = ${modular}`);