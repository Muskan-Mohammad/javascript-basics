var abc = 432;
let xyz = 123;
const fgh = 567;

abc = abc*2;
xyz = 999;
//fgh = 432;   // as it is const it cant be reassinged
console.log(xyz);
console.log(abc);
console.log(fgh);


const vaues = [
    23,
    45,
    56,
    65,
    98,
    87

] 

console.log(vaues);

vaues[3] = 35;
console.log(vaues)  // we cant change the value here 

const food = [ 'Pizza' , 'Burger' , 'Pasta'];
Object.freeze(food);

//food[1] = 'Sphagetti';  // cant reassign the value 

console.log(`FOOD = ` , food);

const values = Object.freeze([
    'Muskan',                    //1
    21,                          //2
    'Female',                    //2
    [ 'Pizza' , 'Burger'],       //4
    { a:20 , b:30}               //5 
]);


console.log(values);
console.log(values.length);
console.log(values[3].length); //2

console.log(values[values.length - 1].length); //undefined

 values[1] = 200;
 console.log(values);    // no value asssinged

values[4].a = 333;
console.log(values)