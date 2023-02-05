
// const table = 2;
// let start = 1;
// const end = 10;

// while( start <= end){
//     console.log(`${table} x ${start} = ${ start * end}`);
//     start++
// }

const table = 2;
let start = 10;
let end = 1;

while( end  <= start){
    console.log(`${table} x ${start} = ${ table * start}`);
    start--
} 


let startTable = 1;
let endTable = 15;

while(startTable <= endTable) {
console.log(` The following table is ${startTable}`)
  let startNumber = 1;
  const endNumber = 10;
  while(startNumber <= endNumber) {
    console.log(`${startTable} x ${startNumber} = ${ startTable * startNumber }`);
    startNumber++;
  }
  console.log("----------------------------------------------------")
  startTable++;
}