const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  //res.end('Hello Carlos');

    var varvar = 'varvar test';
    let letvar = 'letvar test';
    const constvar = 'constvar test';

    console.log (varvar);
    console.log (varvletvarar);
    console.log (constvar);

    // res.end(letvar);
    // res.end(varvar);
    
    // res.end(constvar);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});