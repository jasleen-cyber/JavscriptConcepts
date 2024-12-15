const http = require("http");
const l = console.log ;

const Server = http.createServer((req,res)=>{
   /*  res.end("hello from the server side!");
    console.log("works001"); */

//ROUTING
const pathname = req.url;
l(pathname);


if (pathname === '/'){
    res.writeHead(404 , {
        'anyHeader' : 'happy-bday' , 
        'content-type' : 'text/html'
    }
        );
    res.end("<h1>home page</h1>");
}else if(pathname === '/product'){
    res.writeHead(404 , {
        'anyHeader' : 'happy-bday' , 
        'content-type' : 'text/html'
    }
        );
    res.end("<h1>products</h1>");
}else{
    res.writeHead(404 , {
        'anyHeader' : 'happy-bday' , 
        'content-type' : 'text/html'
    }
        );
    res.end("<h1>page not found ji</h1>");
}















    
}) ;

Server.listen('8000','127.0.0.1',()=>{
    console.log("listening for request on port 8000");
});



