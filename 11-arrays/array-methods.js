const drinks = [

];

drinks.push('Hot-Chocolate');

drinks[drinks.length]= 'Tea';

console.log(drinks);


function addValue(){
    return 20+20;
};

function substractValue(){
    const val = 30 + 40;
};

const valueOne = addValue();
const valueTwo = substractValue();

console.log( `The value of addValue is = ${valueOne}`);       // 40
console.log( `The value of sustractValue is = ${valueTwo}`);  // no value displayed . undefined 


[].forEach;
/*
(method) Array<never>.forEach(
  callbackfn: (value: never, index: number, array: never[]) => void, 
  thisArg?: any
): void
Performs the specified action for each element in an array.
*/

[].map;
/*
(method) Array<never>.map<U>(
  callbackfn: (value: never, index: number, array: never[]) => U, 
  thisArg?: any
): U[]
Calls a defined callback function on each element of an array, and returns an array that contains the results.
*/


const welcome_here_with_forEach_method = drinks.forEach((drink) => {
    const message = `Your ${drink}`;
    console.log(message);
    return message;
});

console.log( `The value using forEach method` , welcome_here_with_forEach_method );  //undefined

const welcome_here_with_map_method = drinks.map((drink) => {
    const message = `Your new ${drink}`;
    console.log(message);
    return message;
});

console.log( `The value using map method` , welcome_here_with_map_method ); //you drinks here displyed

const shoppingPrices = [ 499 , 399 , 999 , 1399 , 1699];
const discountPrices = [];
const DISCOUNT_PERCENTAGE = 20;

function applyDiscount( amount , DISCOUNT_PERCENTAGE = 20){
    // Discount Formule: (VALUE * DISCOUNT) / 100;
    const Discount = (amount * DISCOUNT_PERCENTAGE ) / 100;
    return amount - Discount;
};

for ( let i=0 ; i< shoppingPrices ; i++){
const value = shoppingPrices[i];
const discountAmount = applyDiscount(value, DISCOUNT_PERCENTAGE);
  discountPrices.push(discountAmount)
};

const discount_values_using_map = shoppingPrices.map((amount) => {
    const discountAmount = applyDiscount(amount, DISCOUNT_PERCENTAGE);
    return discountAmount;
  });

  
  const map_using_single_statement = shoppingPrices.map(amount => applyDiscount(amount));

console.log(shoppingPrices);
console.log(discountPrices);
console.log(discount_values_using_map);
console.log(map_using_single_statement);
  
  [ 'Muskan' , 'Sani' , 'Abhi'].forEach((value) => {
    console.log( ` My name is ${value}`);
  });

// [].forEach( () => {} );
// [].forEach( function() {} );
// 

[ 'a' , 'b' , 'c'].map((char) => {
  console.log(` The values are ${char.toUpperCase()}`);
})