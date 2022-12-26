const add = ( a , b) => {
    return a+b;
}

const newValue = add ();
console.log(newValue); // It displays NaN


const otherValue = add ( 10 , );
console.log(otherValue); // It displays NaN

const sumValue = add(10,5)
    console.log(sumValue); //It displays 15




function newCostomer (username="UNKNOWN"){
    console.log(` Are you a ${username} user`)
}    

newCostomer();
newCostomer('Muskan')


const programmer = ( newprogrammer = "newuser") => {
    return `Hey !!! There ${newprogrammer}`
}

const newPerson = programmer('Zoya');
console.log(newPerson);