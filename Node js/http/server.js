const http = require('http');

const server = http.createServer((req,res) =>{
    res.statusCode= 200;
    res.setHeader('content-Type', 'text/plain');
    res.end('Congratulation,Node is successfully created by you');
});

const PORT = 3000;
const HOSTNAME ='localhost';

server.listen(PORT,() =>{
    console.log('Server running at', {HOSTNAME},{PORT});
})