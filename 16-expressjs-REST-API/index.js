const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(4000 ,  ()=> {
console.log(`The port is running on http://localhost:4000 successfully !!!` )
});

app.get('/' , (req , res)=>{
res.send("Hellow to the express js session of REST-API methods.")
})

//  GET request method

var USER_ENDPOINT = '/food';
const apiHandler = (req , res) => {
    res.send({success: true})
};
app.get(USER_ENDPOINT , apiHandler);

// POST request metho

var USER_ENDPOINT = '/food';
app.post(USER_ENDPOINT , function(req , res){

});


// PUT request method
var USER_ENDPOINT = 'food/:id';
app.put(USER_ENDPOINT , function( req , res){
    const userID = req.params.id;
});


// DELETE request method
var USER_ENDPOINT = 'food/:id';
app.delete(USER_ENDPOINT , function(req , res){
    const userID = req.params.id;
})
