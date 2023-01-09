import readline from 'readline-sync';


const PIZZA = 'Pizza';
const BURGER = 'Burger';
const PASTA = 'Pasta';
const DRINKS = 'Drinks';


const foodItems = [
    PIZZA,
    BURGER,
    PASTA,
    DRINKS
];

export function MenuList(){
const food = readline.keyInSelect(foodItems);
const selectedFood = foodItems[food];
 return selectedFood ;
//  console.log(selectedFood);
}