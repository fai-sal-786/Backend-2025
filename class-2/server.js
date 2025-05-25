const  http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end('<h1>Hello world</h1>'); 
});

server.listen(port, hostname,() =>{
    console.log(`server running at http://${hostname}:${port}/`); 
});

// import obj from './mymodule.js'
// console.log(obj)
