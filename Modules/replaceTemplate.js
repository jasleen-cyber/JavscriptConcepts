module.exports  = (temp, product) => {
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
    