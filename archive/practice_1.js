let http = require("http");

http
  .createServer((req, res) => {
    
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(`{test:'test'}`);
  })
  .listen(9000, 'localhost', () =>{
    console.log("running on port: 9000");
    console.log()
  });
