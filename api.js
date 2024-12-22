const http = require("http");
const fs = require("fs");
const url = require("url");
//const { type } = require("os");
const l = console.log;

const data = fs.readFileSync("./dev-data/dev.json", "UTF-8");
const dataObj = JSON.parse(data);

const overviewTemp = fs.readFileSync(
  "./Templates/overview-template.html",
  "UTF-8"
);
const cardTemp = fs.readFileSync("./Templates/card-template.html", "UTF-8");
const nodeProduct = fs.readFileSync("./Templates/node-product.html", "UTF-8");
const GurleenProduct = fs.readFileSync(
  "/Users/jkm/Desktop/JavscriptConcepts/gurleen.html"
);

const replaceTemplate = (temp, product) => {
let output  = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);

  if (product.organic === false) {
    output = output.replace(/{%ORGANIC%}/g, "not-organic");
  }

  output = output.replace(/{%ID%}/g, product.id);

  output = output.replace(/{%IMGLINK%}/g, product.imglink);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);

  return output;
};

const Server = http.createServer((req, res) => {
  //const pathname = req.url;
  const pathname = url.parse(req.url, true).pathname;
  const query = url.parse(req.url, true).query;

  if (pathname === "/") {
    const cards = dataObj.map((el) => replaceTemplate(cardTemp, el));
    const output = overviewTemp.replace(/{%PRODUCTCARDS%}/g, cards);
    res.writeHead(200, { "content-type": "html" });
    res.end(output);
    l(cards);
  } else if (pathname === "/product") {
    const productel = dataObj[query.id] ;
    res.writeHead(200, { "content-type": "text/html" });
     const output = replaceTemplate(nodeProduct,productel);
        res.end(output);
  } else if (pathname === "/api") {
    l(cards);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } /* else if (pathname === "/productid=5") {
    res.end("<h1>Aloo kachalu beta kaha gayein the......</h1>");
  } else if (pathname === "/productid=6") {
   res.writeHead(200, { "content-type": "html" })
    //res.end("<h1>Nepali Aaagaye Oyee!!</h1>");
    //const op = GurleenProduct;
    res.end(GurleenProduct);} */ else {
    res.writeHead("404", {
      "content-type": "text/html",
      "my-own-header": "jasleenWins",
    });

    res.end("uh-oh, page not found");
  }
});

Server.listen("8000", "127.0.0.1", () => {
  l("listening on  server baby!");
});
