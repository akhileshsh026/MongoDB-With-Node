var http = require('http');

var server = http.createServer( function(Request,Response) {
       Response.writeHead(200,{"Content-Type":"text/plain"});
       Response.end("Hello World  this is for ending the response \n");
});

server.listen(8000);

console.log("Server runnning at 8000");