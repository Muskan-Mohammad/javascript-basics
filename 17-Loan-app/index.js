const express = require("express");
const bodyParser = require("body-parser");
const db  = require("./db.js");

// Creating an express application
const app = express();

// Handling json body request
app.use(bodyParser.json());

app.get('/loan' , function(req , res){
   db.serialize(() => {
    db.all(`SELECT * from loans` , (error , rows) => {
        if(error){
            res.json({
                status: false,
                error: error
            })
        } else {
            res.json({
                status : true,
                loans : rows
            })
        }
    })
   })
});


app.post('/new-loan' , function ( req , res){
    const loanData = req.body;
    const { fullName , amount , purpose  ,email} = loanData;


    if(!fullName){
        return sendErrorResponse( res , 'Please enter your fullName');
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

    const insertSQL = `INSERT INTO loans ( 
        fullName,
        amount,
        email,
        purpose)    VALUES (
           " ${fullName}",
           " ${amount}",
           " ${email}",
           " ${purpose}"

        )`;

        db.serialize(() => {
            db.exec(insertSQL , (error) => {
                if(error){
                    res.status(400).json({
                        status : false,
                        error: error
                    })
                } else {
                   res.json({
                    status: true,
                    message:"New application for loan was created",
                    // data : loanData,
                    // sql: insertSQL
                   }) 
                }
            })
        });
});

app.get('/loan/:id' , function(req , res){
       const loan_id = req.params.id;
       const sql = `SELECT * from loans WHERE loan_id=${loan_id};`;
       db.serialize(() => {
        db.get(sql , (err , rows) => {
            if(err || !rows) {
                res.status(400).json({status: false , error: `Unable to find loan with id: ${loan_id}`})
            
            } else {
                res.json({status: true , loans : rows })
            }
        })
       })
       
})

app.post('/loan/:id' , function (req , res){
    const loan_id = req.params.id;
    const requestBody = req.body;
    const status = requestBody.status;

    const sql = `
    UPDATE loans
    SET status="${status}}"
    WHERE loan_id=${loan_id}
    `;
    db.serialize(() => {
        db.exec(sql , (err) => {
            if(err) {
                res.status(400).json({status: false , error: `Unable to find loan with id: ${loan_id}`})
            
            } else {
                res.json({status: true , message : "Loans Updation is available" 
            })
            }
        })
       })  
})


function sendErrorResponse( res , errorMessage){
    return res.status(400).json({
        status : false,
        error: errorMessage
    });
}


app.listen( 3000 , function(){
    console.log(` API services are running on http://localhost:3000`);
});