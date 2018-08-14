var http= require('http');
var server = http.createServer(function(Request , Response) {
                  Response.writeHead(200, {"Content-Type":"text/plain"});
                  Response.end("Hello, World!!!!!!");
});

server.listen(9000);

console.log("Server Sucessfully Started at port 9000");