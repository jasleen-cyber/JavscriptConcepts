const http = require("http");

const Server = http.createServer((req,res)=>{
    res.end("hello from the server side!");
    console.log("works001");
}) ;

Server.listen('8000','127.0.0.1',()=>{
    console.log("listening for request on port 8000");
});



