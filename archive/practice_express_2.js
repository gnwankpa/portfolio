const express = require('express');

var app = express();

app.get('/',(req,res)=>{
  res.status(200).json('hi')
})

let port = 3000
let hostname = 'localhost'

const startServer = app.listen(port, hostname, () =>{

  console.log(`running at this addres: http://${hostname}:${port}`)

})