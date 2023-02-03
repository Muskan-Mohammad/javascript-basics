const http = require("http");

const server = http.createServer((request , response ) => {
   const food = [
    "Pizza",
    "Burger",
    "Pasta",
    "Chips",
    "Tea"
   ];
   const convertToString = JSON.stringify(food);
   response.writeHead(200);
   response.end(convertToString);

});

// JSON.parse     => It convert your `string` type array/object into original object/array
  // JSON.stringify => It convert your array/object instance into plain string


  server.listen( 800 , "localhost" , ()=> {
    console.log('Server is running on the port 800');
  })
