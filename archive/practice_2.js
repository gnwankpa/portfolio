let http = require('http');

http
  .createServer((req, res)=>{
    res.writeHead(200,'Content-Type', 'application/json')
    res.end('{test:test}')
  }, console.log('yeah!'))
  .listen(9000, 'localhost',()=>{
    console.log('running the server')
  })
