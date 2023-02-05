

// let start = 1;
// let end = 30;

// while( start <= end){
//     console.log(` the ans to it is ${start} and ${end}`);
//     start++
// }

import readline from 'readline-sync';

let currentTable = readline.questionInt(` Which table frame would you want folks ???`);

let start = 1;
 let end = readline.questionInt(`  Till Which end  would you want folks ???`);

 while( start <= end){
    console.log(` ${currentTable} x ${start} = ${start*end} `);
    start ++
 }