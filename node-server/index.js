const http = require("http");


// const server = http.createServer(function (request, response) {
//   response.writeHead(200);
//   response.end("Data Serve from node server")
// });


const requestListener = function(request, response) {
    response.writeHead(300);
    response.end("Data from node server");
  }
  
  const server = http.createServer(requestListener);
  
  server.listen(100, 'localhost', ()=> {
    console.log(`Happy server running !!!....`)
  });
  
  
  // Browser  -> localhost
  // Terminal -> curl localhost