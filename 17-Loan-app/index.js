const express = require("express");
const bodyParser = require("body-parser");

// Creating an express application
const app = express();

// Handling json body request
app.use(bodyParser.json());

app.get('/' , function(req , res){
    res.json({
        status: true,
        message: "Loan API is running successfully!!!"

    });
});


app.post('/new-loan' , function ( req , res){
    const loanData = req.body;
    const { firstName , lastName , amount , purpose  ,email} = loanData;


    if(!firstName){
        return sendErrorResponse( res , 'Please enter your firstName');
    }

    if(!lastName){
        return sendErrorResponse( res , 'Please enter your lastName');
    }

    if(!amount){
        return sendErrorResponse ( res , 'Please enter your amount for the loan');
    }

    if(!purpose){
        return sendErrorResponse ( res , 'Please enter ur purpose of taking loan');
    }

    if(!email){
        return sendErrorResponse ( res , 'Please enter a valid email');
    }

    res.json({
        status : true,
        message : "New Loan application created...",
        data : loanData
    });
});

function sendErrorResponse( res , errorMessage){
    return res.status(400).json({
        status : false,
        error: errorMessage
    });
}


app.listen( 3000 , function(){
    console.log(` API services are running on http://localhost:3000`);
});