import readline from 'readline-sync';
import chalk from 'chalk';

const food = ['Pizza', 'Pasta'];

const SHOW_FOOD = 'Show food items in the menu !';
const ADD_FOOD = 'Add ur fav food here';

const CUSTOMER_CHOICE = [
    SHOW_FOOD, 
    ADD_FOOD    
]

let canRunMenu = true

while (canRunMenu) {
  const userActionIndex = readline.keyInSelect(CUSTOMER_CHOICE);
  console.log(chalk.bgGreenBright(` Costomer ordered is = ${userActionIndex} `));

  if (userActionIndex === -1) {
    console.log(chalk.bgRedBright("Stoping Application...."));
    canRunMenu = false;
  } else {
    const COSTOMER_SELECTED = CUSTOMER_CHOICE[userActionIndex];
    console.log(chalk.bgCyan(`Costomer Selected option :  ${COSTOMER_SELECTED} `));

    if (COSTOMER_SELECTED === SHOW_FOOD) {
      console.log(food);
    } else {
      const newFoodItem = readline.question("Please enter ur fav food item here : ");
      food.push(newFoodItem);
    }
  }


}