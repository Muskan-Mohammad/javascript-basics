// Comparision operators 

// ==
// ===
// <=
// <
// >=
// >
// !=
// !==


// Logical operators 
//  &&         And     And operators check all the true values
// ||          Or      It stops for at one value
// !            Not


// true&&true
// true
// > true&&false
// false
// > false&&true
// false
// > false&&false
// false
// > 12&&8
// 8
// > 12||8
// 12
// > 12<=11
// false
// > true&&true&&true&&true
// true
// > true&&true&&false&&true
// false
// > false&&true&&true
// false
// > 45>34&&34=34&&87<112
// 45>34&&34=34&&87<112
// ^^^^^^^^^

// Uncaught SyntaxError: Invalid left-hand side in assignment
// > 45 > 34 && 45 === 45 && 3 < 5
// true
// > 45 > 34 && 45 === 45 && 3 > 5
// false
// > true || true || true
// true
// > true || true || false
// true
// > false || true || true
// true
// > 56 == 56 || 34 != 55
// true
// > "muskan" || "mohammad"
// 'muskan'
// > " " || "Zoya"
// ' '
// > !" " || "Zoya"
// 'Zoya'
// > !0
// true
// > !45
// false
// > undefined
// undefined
// > !undefined
// true
// > !!undefined
// false

import readline from 'readline-sync';

const userAge = readline.question(` What is your age ??`);
const minAge = 21 ;
const maxAge = 80;

if (userAge >= minAge && userAge <=maxAge){
    console.log( ` Welcome , You can join in here`);
}else {
    console.log(` Opps!! u cant exceed or preceed the limit age`);
}