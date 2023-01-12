import readline from 'readline-sync';
import chalk from 'chalk';


const ADD_ITEM = 'Add menu item';
const SHOW_MENU_LIST = 'Show all the menu items';

const USER_FAV = [
    ADD_ITEM ,
    SHOW_MENU_LIST
];

let runProgram = true;
let menu = [] ;

while(runProgram){
    const userChoiceIndex = readline.keyInSelect(USER_FAV);
    const userChoice = USER_FAV[userChoiceIndex];


if(userChoice === ADD_ITEM){

    const  newMenuItem = readline.question('Please enter your fav menu item : ');

    if(newMenuItem){
        menu.push(newMenuItem);
        console.log(` New menu item added to list of ${newMenuItem}`);
    }
}

else if( userChoice == SHOW_MENU_LIST){
    console.log('List of menu items');
    console.log(menu);

}

else {
    runProgram = false;
}

}