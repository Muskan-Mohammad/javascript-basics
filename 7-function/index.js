import chalk from "chalk";


console.log("Hellow to the page");


function myFriends() {
    console.log("Muskan");
    console.log("Sani");
    console.log("Abhi")


}

myFriends();


function addition (firstValue , secondValue) {
    console.log("Addition of the two numbers");
    console.log( chalk.bgMagenta(firstValue) );
    console.log(chalk. bgCyan(secondValue));

    const output = firstValue +  secondValue ;
    console.log(chalk.white(output));
}


addition ( 34 , 36);


function substraction (firstValue , secondValue) {
    console.log("Substraction of the two numbers");
    console.log( chalk.bgMagenta(firstValue) );
    console.log(chalk. bgCyan(secondValue));

    const output = firstValue -  secondValue ;
    console.log(chalk.white(output));
}


substraction ( 36 , 34);

function multiplication (firstValue , secondValue) {
    console.log("Multiplication of the two numbers");
    console.log( chalk.bgMagenta(firstValue) );
    console.log(chalk. bgCyan(secondValue));

    const output = firstValue *  secondValue ;
    console.log(chalk.white(output));
}


multiplication ( 36 , 34);

function division (firstValue , secondValue) {
    console.log("Division of the two numbers");
    console.log( chalk.bgMagenta(firstValue) );
    console.log(chalk. bgCyan(secondValue));

    const output = firstValue / secondValue ;
    console.log(chalk.white(output));
}


division ( 24 , 4);


function modular (firstValue , secondValue) {
    console.log("Modular of the two numbers");
    console.log( chalk.bgMagenta(firstValue) );
    console.log(chalk. bgCyan(secondValue));

    const output = firstValue % secondValue ;
    console.log(chalk.white(output));
}


modular ( 24 , 5);

