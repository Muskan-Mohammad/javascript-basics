
// In the following code, what are the final length values for array1, array2, array3, array4, and array5?
let array1 = [1, 2, undefined, 4];    //4

let array2 = [1];                     //5
array2.length = 5;

let array3 = [];                      //0
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];         //3
array4.length = 3;

let array5 = [];                      //101
array5[100] = 3;

// Log all of the even values from myArray to the console.
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

 let evenNumbers = myArray.filter(  arr => arr % 2 === 0  );
 console.log(evenNumbers);


//  Let's make the problem a little harder. In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.

let myArray1 = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
];

let newEvenNumbers = myArray1.map( function (value){
    return value.filter( num => num % 2 === 0);
} ) 
console.log(newEvenNumbers);


// Let's try another variation on the even-numbers theme. We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a new array that contains one element for each element in the original array. If the element is an even value, then the corresponding element in the new array should contain the string 'even'; otherwise, the element in the new array should contain 'odd'.

let myArray2 = [
    1, 3, 6, 11,
    4, 2, 4, 9,
    17, 16, 0,
];

let newVar = myArray2.map( function (value) {
    if (value % 2 === 0){
    return 'even' ; 
    } else {
        return 'odd' ;
    }
}
)

console.log( newVar);

//Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function.

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
var findIntegers  = things.filter( function(props){
    return Number.isInteger(props);
    
});
console.log(findIntegers );


// Use reduce to compute the sum of the squares of all of the numbers in an array:

let array = [3, 5, 7];
// console.log(sumOfSquares(array)); // => 83

let newArray = array.reduce( function(prev , secnd){
     return prev + (secnd * secnd);
} , 0);
console.log(newArray); 


// Write some code to replace the value 6 in the following array with 606:

let arr = [
    ["hello", "world"],
    ["example", "mem", null, 6, 88],
    [4, 8, 12]
];

arr[1][3] = 606;
console.log(arr);