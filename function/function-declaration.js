// import readline from 'readline-sync';

// const firstValue = Number(readline.question(`Please enter the value of a = `)); 
// const secondValue = Number(readline.question(`Please enter the value of b = `)); 


// function maths(valueOne, valueTwo) {
//   console.log(`Value of a is ${valueOne}`);
//   console.log(`Value of b is ${valueTwo}`);

//   const addition = valueOne + valueTwo;
//   const subtraction = valueOne - valueTwo;
//   const multiply = valueOne * valueTwo;
//   const division = valueOne / valueTwo;
//   const modulo = valueOne % valueTwo;

//   console.log(`Addition of ${valueOne} and ${valueTwo} is ${addition}`);
//   console.log(`Subtraction of ${valueOne} and ${valueTwo} is ${subtraction}`);
//   console.log(`Multiply of ${valueOne} and ${valueTwo} is ${multiply}`);
//   console.log(`Division of ${valueOne} and ${valueTwo} is ${division}`);
//   console.log(`Modulo of ${valueOne} and ${valueTwo} is ${modulo}`);
// }

maths(firstValue, secondValue);

function  createNewMemeber( yourfirstName , yourlastName , yourage , yourgender , yourcity){

    const member = {
        firstName : yourfirstName,
        lastName : yourlastName,
        age : yourage,
        gender : yourgender,
        city : yourcity
    }
    return  member;
}


const newMemeber = createNewMemeber( 'Muskan' , 'Mohammad' , 21 , 'Female' , 'Hyderabad' );
console.log(newMemeber);