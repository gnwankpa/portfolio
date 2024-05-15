const express = require('express');

var app = express()

app.get('/',(req, res) =>{

  res
  .status(200)
  .json({test:"Hopefully this is an obvous test"})
})

const port = 3000
const hostname = 'localhost'

app.listen(port, hostname,()=>{
  console.log(`Listening on @ http://${hostname}:${port}`)
})