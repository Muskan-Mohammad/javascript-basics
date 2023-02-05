import readline from 'readline-sync';

const food = [
    'Pizza',    //0
    'Burger',   //1
    'Pasta'     //2

//     [1] Pizza
// [2] Burger
// [3] Pasta
// [0] CANCEL
]

const favFood = readline.keyInSelect(food);
// console.log(favFood);

const userSelectedFood = food[favFood];
console.log(`The food selected by the costomer is - ` , userSelectedFood);


//  SWITCH METHOD 

const pizza = 0 ;
const burger = 1;
const pasta = 2;

switch (favFood) {
    case pizza:
        console.log( `Yes , It is available`);
        break;
        case burger:
        console.log( `Yes , It is available but will take time for preparation`);
        break;
        case pasta:
        console.log( `Yes , It is available with additional cheese `);
        break;

    default:
        console.log(` we are sorry your fav food aint here!!`);
        
}


// if(favFood === pizza){
//     console.log( `Yes , It is available`);
// }else if (favFood === burger){
//     console.log( `Yes , It is available but will take time for preparation`);
// } else if (favFood === pasta){
//     console.log( `Yes , It is available with additional cheese `);
// } else {
//     console.log(` we are sorry your fav food aint here!!`);
// }