    const readline = require('readline-sync');

    const name = readline.question("Name : ");
    const age = readline.question("Age : ");
    const email = readline.question("Email : ");
    const phone = readline.question("Phone : ");

    const resume = {
        details : {
            name : name,
            age : age,
            email : email,
            phone: phone
        }
    };

    console.log(resume);