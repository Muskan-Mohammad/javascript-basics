// const AvailableCakes = 10 ;
// console.log(AvailableCakes);

// const yourRequirement = 5 ;
// const cakesarethere =  AvailableCakes >= yourRequirement;

// let cake = ' ';

// if (cakesarethere){
//     cake = `Yes the cakes are available`;
// }  else {
//     cake = ` Cake's are not available`;
// }

// console.log(cake);


import readline from 'readline-sync';
import chalk from 'chalk';

const totalCakes = 15;

let userRequirement = readline.question(` How many cakes do you want ??`);

if( totalCakes>= userRequirement){
    console.log( chalk.bgCyanBright(`Yes the cakes are available`));
} else {
    console.log(chalk.bgRedBright(`Opp's sorry cakes arnt available`));
}



//  Terinary operators 

const totalTops = 100 ;
let value = '';
const costomerinput= readline.question( ` How many tops do you want as a LOT ?`);

value = costomerinput <= totalTops ? 'Yes , thy r available' : 'They arnt available';

console.log(value);

const condition = costomerinput <= totalTops ;
const trueMessage = 'Yes , thy r available';
const falseMessage = 'They arnt available';

const totalValue = condition?trueMessage : falseMessage;
console.log(totalValue);