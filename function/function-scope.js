// var a = 23;
// var b = true ;
// var c = 'Muskan';

// console.log( a , b ,c);

// const icecreame = 'Chocolate' ;

// function newFlavour(){

//     const flavour = 'vanilla';
//     console.log({
//         object:icecreame,
//         flavour:flavour
//     });


// }

// newFlavour();

//  thr values of const and let can be accessd only if they are outsde of the function 
//  If the values r in thn they cant be used to access out ..


// const shopping = function (amount){

//   const taxAmount = () => {
//     return amount + 50;
//   }

//   function discountamount(){
//     return 10;
//   }

//   const total = taxAmount() - discountamount();
//   console.log(total);

// }

// const billAmount = shopping(200);
// console.log(billAmount);

import readline from 'readline-sync';
const taxAmount = 100;

function totalFood(amount){
const discountamount = 20;

function foodWithTax(){
  const taxamounttotal = taxAmount + amount;
  return taxamounttotal;
} 
function foodWithDiscount(){

  const discount = foodWithTax() - discountamount;
  return discount;
}

// const bill = foodWithDiscount();
// console.log(bill);


const first = readline.question (" How much is your Bill ?");


const second = Number(readline.question (` Your your total bill is after tax and discount is = ${foodWithDiscount()} `));
  

const info = {
  details : {
    1 : first,
    2  : second,
    
  }
}


console.log(info);
}




const totalBill = totalFood(1000 );
console.log(totalBill);







