

//  Data types
// String  'addf'
// Number 21
// Boolean  true
// undefined  undefined
// null  returns typeOf object
// Object {  key : 'value' , key2 : 'value2'}
// Array  [ 'ff' , 'sff' , 'frfg']
// function ( param1 , param2) { return param1 + param2}


function multiply ( a , b, c){
    return a*b*c;
}

const total = multiply( 2 , 3,4);
console.log(total);


// add(23)(26)(83)

function add (x){
    return function (y) {
        return function (z){
            return x + y + z;
        }
    }
}

var view = add(23)(26)(83);
// const lol = add ( 23 , 26 , 83);
console.log(view);
console.log(`Executing return functions in one single typeof`, typeof view);

function welcome(name) {
    return `Welcome ${name}`;
  }
  
  function execute(param) {
    const value = param();
    return value;
  }
  
  console.log(welcome('Muskan'));

//   execute(() => { }); // here we are passing arrow function as parameter to execute function
execute(welcome); // here we are passing welcome function as parameter to execute function
// 




function newTask ( param1 , param2){
    const val1 = param1() ;
    const val2 = param2 (); 

    return {
        val1 : val1 ,
        val2 : val2
    }
}


function addition (){
    return 100 + 100
}

function substraction(){
    return 774-456
}

const newValue   =  newTask( addition , substraction);
console.log(newValue);


const anotherResult = newTask (

    () => {
        return 20 - 10;
      },
      () => {
        return 56 + 44;
      }
)

console.log(anotherResult);