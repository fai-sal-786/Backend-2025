// const f = () => {
//   return "hello";
// };

// var x = "string";

// console.log('hello world eshop');

const express = require ('express');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;

//http://localhost:3000/api/v1/products

app.get(`${api}/products`, (req, res)=>{
  const product = {
     id: 1,
     name: 'hair dresser',
     image: 'some_url',
  }
  res.send(product);
})

app.listen(3000, ()=>{
  //console.log(api);
  console.log('server is running http://localhost:3000');
})