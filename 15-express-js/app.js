const fs = require('fs');
const express = require('express');
const { response } = require('express');
const app = express();

function getTheFileData(path){
    const data = fs.readFileSync(path);
    const json = JSON.parse(data);
    return json;

};

const DATA_FOLDER = '../14-node-server/data';
const products = getTheFileData(`${DATA_FOLDER}/products.json`);
const categories = getTheFileData(`${DATA_FOLDER}/categories.json`);

const handleTheCategories = function (request , response){
    response.json(categories);
};

app.get("/" , function(req , res){
    res.send("Express app is runing successfully!!!...")
});

app.get("/product" , function(req , res){
    res.json(products);
});

app.get("/categories", handleTheCategories);

app.get("/products/:productID", (req, res) => {
    const productId = req.params.productID;
    const product = products.find(p => p.id === parseInt(productId));
  
    if(!product) {
      res.json({
        error: true,
        message: `Opps !! Sorry no such products found with the ID ${productId}`
      })
    } else {
      res.json(product);
    }
  })
  
  app.listen(4000, () => {
    console.log(`Server listening on port http://localhost:4000`)
  });