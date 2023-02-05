const name= [
    'Muskan',
    'Mohammad'
];
console.log(name);

const namesLength = name.length;

console.log(`Welcome here ${name[0]}`);
console.log(`Welcome here ${name[1]}`);

// Iterating Array values using LOOPS
let index = 0;
while (index < namesLength) { // while condition 3 < 3 => true
  console.log(`Welcome ${name[index]}`);
  index++; // index = index + 1; 
}

for (let i = 0; i < namesLength; i++) {
  console.log(`HOLLA ${name[i]}`)
}

console.log(name);
console.log(typeof name); // typeof values alway return "object"

// How to identify the value is Array or not ?
// by using Array.isArray(value) will true/false


console.log(Array.isArray(name));
console.log(Array.isArray("Muskan"));

// Iterating Array values using ARRAY.method() 
//  [].methodName()

// .forEach method 
// [].forEach 
// "".forEach (X)
// {}.forEach (X)

function loopItems() { }

[].forEach(() => { });
[].forEach(function () { });
[].forEach(loopItems)

// Looping array through forEach callbackFN

name.forEach( function (first , second) {
    console.log(`First Param = `, first); // First Param always refers to VALUE in array
  console.log(`Second Param = `, second); // Second Param always refers to INDEX of VALUE
});


let studentMarks = [ 23 , 45 ,54, 34 , 77];
studentMarks.forEach((value) => {
    console.log(value);
});

studentMarks.forEach((value, index) => {
    console.log(`Index = ${index} | MARKS = ${value}`)
  });
  

  function iterateMarks(v, i, arr) {
    console.log(`Marks: ${v} at index of ${i}`);
  }
  
  studentMarks.forEach(iterateMarks);

  const loop = function (value) {
    console.log(`Loop value ${value}`);
  };
  
  const numbers = [20, 40, 60];
  numbers.forEach(loop)