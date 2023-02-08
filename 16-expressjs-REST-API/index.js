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



const USER_ENDPOINT = '/food';

//  GET request method to get all the food list
const apiHandler = (req , res) => {
    res.send({success: true})
};
app.get(USER_ENDPOINT , apiHandler);

// POST request method to create a new food item
 

app.post(USER_ENDPOINT , function(req , res){
 res.send({success: true})
});


// PUT request method to update anf food item
// 
app.put(`${USER_ENDPOINT}/:id`, function( req , res){
    const userID = req.params.id;
    res.json({status: true , id: userID});
});


// DELETE request method to delete any food item from the menu

app.delete(`${USER_ENDPOINT}/:id` , function(req , res){
    const userID = req.params.id;
    res.json({status: true , id: userID});
});
