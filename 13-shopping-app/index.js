import readline from 'readline-sync';
import chalk from 'chalk';
import {categories , products} from './utlis.js';

console.log(chalk.bgGrey(`Welcome to our Shopping Zone`));

 const userSelectedOption = readline.keyInSelect(categories);
console.log(` The selected item categoryvindex is =  ` , userSelectedOption );

const userCategory = categories[userSelectedOption];
console.log(userCategory);

