console.log("**** Resume Maker **** ");

const name = prompt("Name : ");
    const age = prompt("Age : ");
    const email = prompt("Email : ");
    const phone = prompt("Phone : ");

    const resume = {
        details : {
            name : name,
            age : age,
            email : email,
            phone: phone
        }
    };

    console.log(resume);