const http = require("http");
const fs = require('fs');

const categories = fs.readFileSync('data/categories.json');
const products = fs.readFileSync('data/products.json');

function createServer (request , response){
    console.log( ' Requested server URL: ' , request.url);
    const requestedURL = request.url;

    if(requestedURL === "/products"){
        response.end(products);
    }else if (requestedURL === "/categories"){
        response.end(categories);
    } else {
        if (requestedURL.includes("/products/")){
            const path = requestedURL.split("/");   // /products/5 => ["", "product", "5"]
            const productsId = path[path.length - 1];
            console.log("Product ID:", productsId);
            const productsList = JSON.parse(products);

             // Here productId is string
      // product.id == productId

      // String to Number
      // 1. Number.parseInt("3"); // 3
      // 2. parseInt("3"); // 3
      // 3. +"3"; // 3

      // JSON.parse     => string -> object/array
      // JSON.stringify => object/array -> string  

      const product  = productsList.find( product=> product.Id === +productsId);
          
      if (product){
        response.end(JSON.stringify(product));
      } else {
        response.end("No such products found");
      }


        }
        else {
            response.writeHead(404);
            response.end(`Resource not found. Please try with /categories or /products or /products/{PRODUCT_ID}`)
          }

    }
};


const server = http.createServer(createServer);
server.listen(4000 , "localhost" , ()=> {
    console.log('Project is running smoothly on port 4000 of localhost');
})

