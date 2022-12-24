

// console.log("Hey !! There welcome to our shop");

// function customer(id){
//     return(id);
// }

// const newCostomer = customer(1);
// console.log(`My customer id = ${newCostomer}`);


// const add = function ( x ,  y){
//     return x + y;
// }

// const addNumbers = add ( 45 , 56);
// console.log(addNumbers);


import readline from  'readline-sync';


const totalQuestions = function( customerName , customerTravel , customerCity , customerBudget){
const all = String(customerName)  + String(customerTravel)  + String(customerCity) + String(customerBudget);
return all;
}
console.log("Welcome to SPARKS travel agency!!!")
const name = readline.question(" What is your name? ");
const travel = readline.question(" How do you wanna travel?");
const city = readline.question("Are you sure you wanna go to this city?");
const budget = +readline.question("Your total travel budget?")

const totalBill = totalQuestions(name , travel , city ,budget );
console.log( totalBill );



