
const express = require('express');

const app = express()

app.get('/',(req, res) =>{

  res
  .status(200)
  .json({test: 'test'})

})

const hostname = 'localhost'
const port = 3030

app.listen(port, hostname,()=>{
  console.log(`listening @ http://${hostname}:${port}`)
})