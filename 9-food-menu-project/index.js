import readline from 'readline-sync';
import chalk from 'chalk';

import  showerror  from './showerror.js';
import { MenuItem } from './menu-items.js';
import { MenuList } from './menu.js';

console.log(chalk.bgCyanBright(` Plese select the Food from the menu!`));
console.log("Which category would you prefer?");

const category = MenuList();
console.log(` U selected ${category}`);

const categoryList = MenuItem();
console.log(` U prefered this ${categoryList} from ${category}`);


if(categoryList){
    console.log(`Thanxx!! for buying ${categoryList}`);
} else {
    showerror();
}