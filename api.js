const http = require("http");
const fs = require("fs");
const { type } = require("os");
const l = console.log;

const data = fs.readFileSync("./dev-data/dev.json","UTF-8") ;
const dataObj = JSON.parse(data);

const overviewTemp = fs.readFileSync("./Templates/overview-template.html","UTF-8");
const cardTemp = fs.readFileSync("./Templates/card-template.html","UTF-8");

const replaceTemplate = (temp,product) => {
let output = temp.replace(/{%IMAGE%}/g,product.image);
 output = output.replace(/{%PRODUCTNAME%}/g,product.productName);
 output = output.replace(/{%QUANTITY%}/g,product.quantity);
 output = output.replace(/{%PRICE%}/g,product.price);
 output = output.replace(/{%DETAIL%}/g,product.from);

 if(product.organic === false){
    output = output.replace(/{%ORGANIC%}/g,'not-organic');
  
 }


 return output;
}

const Server = http.createServer((req,res)=>{



    const pathName = req.url;


    if(pathName ==='/' ){

      

const cards = dataObj.map(el => (replaceTemplate(cardTemp,el)));
const output = overviewTemp.replace(/{%PRODUCTCARDS%}/g,cards)
res.writeHead(200,{"content-type":"html"});
    res.end(output);
    l(cards);
    }else if(pathName === '/products'){
        res.end("Prodcuts page")
    }else if(pathName === '/api'){

    
       l(cards);
       res.writeHead(200,{"content-type":"application/json"});
    
       res.end(data);



    }
    else{

        res.writeHead('404',{"content-type":"text/html","my-own-header" : "jasleenWins"});

        res.end("uh-oh, page not found");
    }


})


Server.listen("8008","127.0.0.1",()=>{
    l("listening on server baby!")
})


