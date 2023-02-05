import readline from 'readline-sync';
import chalk from 'chalk';

const Pizza = [ 'Margerita Pizza' , 'Panner Pizza' , 'Chicken-loaded Pizza'] ;
const Pasta = [ 'White Sauce Pasta' , 'Red Sauce Past'];
const Burger = [' Veg Burger' , 'Chicken-Burger', 'Double-Cheese Burger' ];

const foodItems = [ Pizza , Pasta , Burger];
console.log(foodItems);

console.log(" Welcome to Cafe Lounge");

const que = readline.question(`What to you want from the menu
1. Pizza
2. Pasta
3. Burger  
`);
console.log(que);

const pizza = readline.keyInSelect(Pizza);
// console.log(pizza);

const pasta = readline.keyInSelect(Pasta);
// console.log(pasta);

 const burger = readline.keyInSelect(Burger);
// console.log(burger);


if(foodItems==Pizza){
   
console.log(pizza);
} else if (foodItems==Pasta){
    
console.log(pasta);
} else if (foodItems == Burger) {
    
console.log(burger);
}

