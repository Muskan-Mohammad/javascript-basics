import fs from 'fs';

function getFileInfo(filePath){
  const fileBufferPart = fs.readFileSync(filePath);
  const convertToJSON = JSON.parse(fileBufferPart);
  return convertToJSON;
}


// const categoriesBuffer = fileSystem.readFileSync("./data/categories.json");
// const categories = JSON.parse(categoriesBuffer);
// console.log(categories);

// const productsBuffer = fileSystem.readFileSync('./data/products.json');
// const products = JSON.parse(productsBuffer);
// console.log(products);


export const categories = getFileInfo('./app/categories.json');
export const products = getFileInfo("./app/products.json");