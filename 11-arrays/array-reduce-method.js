const marks = [ 23, 56 , 87, 45, 96,34,76];

//  using while loop method

let total = 0;
let index = 0;

while( index < marks.length){
    const currentValue = marks[index];
    total = total + currentValue;
    index++
};

console.log(` The total value using WHILE LOOP is = ${total}`);

//  using for loop method

let totalValue = 0;
for ( let i=0 ; i<marks.length ; i++){
const currentValue = marks[i];  
totalValue = totalValue + currentValue
} ;

console.log(` The total value using FOR LOOP is = ${totalValue}`);
 
//   using reduce method.

const newValue = marks.reduce (function(previousValue , currentValue)
{
    return previousValue + currentValue
}
);
console.log(`The total value using REDUCE ARRAY method is = ${newValue}`);


const studentMarks = [
    [23,24,26,56,65 ],
    [ 34,45,67,76,54],
    [32,54,65,89,43],
    [ 34,43,56,76,44],
    [66,87,84,21,42]
];

const totalMarks = studentMarks.map(function(value){
    return value.reduce(( prev , curr) => prev+curr)
});

console.log( totalMarks);

const avgMarks = totalMarks.map((value) => (value / 600) * 100);
console.log(avgMarks);

const convertToInteger = avgMarks.map(value => parseInt(value) + "%");
console.log(convertToInteger);