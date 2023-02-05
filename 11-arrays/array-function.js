// [].push(VALUE);
// [].splice(INDEX, END_INDEX);


// [].forEach;        undefined
// [].map;            SAME LENGTH OF ARRAY
// [].filter;         LESS OR EQUAL LENGTH OF ARRAY
// [].reduce;         SINGLE VALUE
// [].some;
// [].find;

const number = [
    23,
    43,
    54,
    67,
    89,
    98,
    45,
    90
];

function tenMultiply(tenTimes){
    const value = tenTimes * 10;
    console.log(value);
     return value;
};


//   forEach method   
// marks.forEach((value, index, originalArray) => {})
// marks.forEach( function(value, index) {} )
const for_each_method = number.forEach(tenMultiply);
console.log( ` The values forEach method are ${for_each_method}`);
// 230
// 430
// 540
// 670
// 890
// 980
// 450
// 900


//    map method
const for_map_method = number.map(tenMultiply);
console.log(for_map_method);

const setNumbers = [ 10  ,20 , 40 , 90 ,46 , 87 , 76, 92 ,100];
[
    230, 430, 540,
    670, 890, 980,
    450, 900
  ]

//   filter method

const evenNumbers = setNumbers.filter (value => value % 10 === 0);
console.log(evenNumbers);  //[ 10, 20, 40, 90, 100 ]

const oddNumbers = setNumbers.filter (value => value % 10 !== 0);
console.log(oddNumbers);   //[ 46, 87, 76, 92 ]


const names= [ 'Muskan' , 'Sani ' , 'Abhi ' , 'Zoya' , 'Sharafath' , 'Arafath' ];

const m_letter_name = names.filter ( value => value[0] === 'M');
console.log(m_letter_name);
// [ 'Muskan' ]

const a_letter_name = names.filter ( value => value[0] === 'A');
console.log(a_letter_name);
// [ 'Abhi ', 'Arafath' ]


//   Comparing operators in array 
var first_array = [5, 45];
var second_array = [5, 45];
console.log(first_array === second_array); // false

//                 10       ===       10

console.log( first_array[0] === second_array[0]) // true
var marks = [10, 20, 30, 40];
var marks_copy = marks;
console.log(marks === marks_copy); //true



