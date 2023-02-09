const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const FOOD_ENDPOINT = '/food';

const foodList = [
    {
        "id": 1,
        "name":"Pizza",
        "price":"120",
        "isAvailable":"Yes"
    },

    {
        "id": 2,
        "name":"Pasta",
        "price":"100",
        "isAvailable":"No"
    },

    {
        "id": 3,
        "name":"Burger",
        "price":"80",
        "isAvailable":"Yes"
    }

]; 

// To get list of all the food items

app.get(FOOD_ENDPOINT , (req , res)=>{
    res.json({
        success: true,
        method: "get",
        customers: foodList
    })
});

// To create a new food in foodList
app.post(FOOD_ENDPOINT , (req , res) => {
    const requestData = req.body;
    const { name , price , isAvailable} = requestData;

    const error = [];

    if(!name){
        error.push(` Name of the food item is not defined`);
    }

    if(!price){
        error.push(`Price needs to be difined`);
    }

    if(!isAvailable){
        error.push( `Check the availaibility of the food plzz` )
    }

    if(error.length > 0){
        return res.json ({
            status : false,
            error : error
        })
    }
   
    const newFoodItem = {
        name: name,
        price : price,
        isAvailable: isAvailable,
        id: foodList.length + 1
    }

    foodList.push(newFoodItem)

    res.json({
        status : true,
        method :"POST ",
        data : newFoodItem
    })
});

//  To update existing food based on foodList id
app.put(`${FOOD_ENDPOINT}/:id` , (req , res) => {
    const foodID = req.params.id;
    res.json({ status : true , id: foodID , method: "put"})
});

// To delete existing user based on food ID
app.delete(`${FOOD_ENDPOINT}/:id` , (req , res) => {
    const foodID = req.params.id;
    const food = foodList.find((food) => food.id === +foodID);

if(!food){
    return res.json({
        status : false,
        message : ` Foof not found with the ${foodID}`
    })
}

// Array.splice (idx , length);

const foodIDX = foodList.findIndex((food) => food.id === +foodID)
foodList.splice(foodIDX , 1)


res.json({
    status : true,
    id : foodID,
    index: foodIDX,
    method : "delete"
})
    
});

// To check wheather the food is thr or not

app.listen(8000, () => {
    console.log(`Server is successfully running on the port http://localhost:8000`)
  });

