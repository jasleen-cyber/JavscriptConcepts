const http = require("http");
const fs = require("fs");
const { type } = require("os");
const l = console.log;

const data = fs.readFileSync("./dev-data/dev.json","UTF-8") ;
const dataObj = JSON.parse(data);

const overviewTemp = fs.readFileSync("./Templates/overview-template.html","UTF-8");
const cardTemp = fs.readFileSync("./Templates/card-template.html","UTF-8");
const GurleenProduct = fs.readFileSync("gurleen.html","UTF-8");

const replaceTemplate = (temp,product) => {
let output = temp.replace(/{%IMAGE%}/g,product.image);
 output = output.replace(/{%PRODUCTNAME%}/g,product.productName);
 output = output.replace(/{%QUANTITY%}/g,product.quantity);
 output = output.replace(/{%PRICE%}/g,product.price);
 output = output.replace(/{%DETAIL%}/g,product.from);

 if(product.organic === false){
    output = output.replace(/{%ORGANIC%}/g,'not-organic');

 }

 output = output.replace(/{%ID%}/g,product.id);

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
    else if(pathName === '/productid=5'){
        res.end("<h1>Aloo kachalu beta kaha gayein the......</h1>")
    }else if(pathName === '/productid=6'){
        res.end("<h1>Nepali Aaagaye Oyee!!</h1>")
        const op = GurleenProduct ;
        res.end(op);
    }
    else{

        res.writeHead('404',{"content-type":"text/html","my-own-header" : "jasleenWins"});

        res.end("uh-oh, page not found");
    }


})


Server.listen("8888","127.0.0.1",()=>{
    l("listening on server baby!")
})


