const food = [

];

food.push('Pasta');
food[food.length] = 'Pizza';

console.log(food);
// Add value at the begining of array
const count = food.unshift('Burger');
console.log(count);
console.log(food);

const newFood = ['Noodles' , 'Sphagetti' , 'Waffle'];
// Merge multiple array with .concat() method
console.log(food);
console.log(newFood);
const total = food.concat(newFood);
console.log(total);

// Convert Array values to String with separator by using .join()

const totalString = total.join();
console.log(totalString);
console.log( typeof totalString);


const totalStrings = total.join('||');
console.log(totalStrings);

    //    0          1        2         3           4         5
// [ 'Burger', 'Pasta', 'Pizza', 'Noodles', 'Sphagetti', 'Waffle' ]

const firstTwo = total.slice( 0 , 2);
// console.log(firstTwo);   [ 'Burger', 'Pasta' ]
const middleTwo = total.slice(2,4);
// console.log(middleTwo);   [ 'Pizza', 'Noodles' ]
const last = total.slice(4);
// console.log(last); [ 'Sphagetti', 'Waffle' ]

const items = [
    'Olive Oil',
     'Butter',
      'Beef',
     'Plain Flour',
     'Garlic',
     'Onions',
     'Celery',
     'Carrots',
     'Leek',
     'Swede',
     'Red Wine',
     'Beef Stock',
     'Bay Leaf',
     'Thyme',
     'Parsley',
     'Plain Flour',
     'Baking Powder',
     'Suet',
     'Water',
];
console.log(items.length);
const lastItems = items.slice(-10);  // itms.slice(items.length - 10s)
console.log(lastItems);

console.log(total);
const indexValueOfPizza = total.indexOf('Pizza');
console.log(indexValueOfPizza); //2               *note  -> it appears as -1 if the value is not defined properly or undefined

const numbers= [ 2 , 4, 5 ,2 , 7, 8 ,6 , 9 ,7 , 4 ];
console.log(numbers.indexOf(2)); //0
console.log(numbers.lastIndexOf(2)); //3

// Remove values from array (THese methods will modify original array);
// .shift()   // return removed Value
// .pop()     // return removed Value
// .splice()  // return removed array of values

// console.log(total.shift());  // removes first item from the array
// console.log(total.pop());    // removes last item from the array
console.log(total.splice(1,3)) //  remain the item only of ths particular numbered array whereas rest r deleted

//  Notee   slice doect change the original set of array !! It just disply the slice item in an array
//       whereas  Splice change the original set of array !! and display hte spliced array item and delete the remaining items from the array
                  // so whn u console log it u only get splice items not the rest items .