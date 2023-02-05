import readline from 'readline-sync';
import chalk from 'chalk';
import fs from 'fs';

const FOOD_FILE_PATH = "./data/food.json";
const fileData = fs.readFileSync(FOOD_FILE_PATH); // readFileSync will return data as buffer
console.log("FILE DATA CONTENT AS BUFFER DATA............")
console.log(fileData);
console.log("Converting Buffer data to JSON by using JSON.parse method");

const food = JSON.parse(fileData);


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
      // console.log("Type of friends is ", typeof friends)

        // Here we need to convert Object/Array to String for saving the file
        // By using JSON.stringify method

        const foodData = JSON.stringify(food)
        fs.writeFileSync(FOOD_FILE_PATH, foodData);
    }
  }


}