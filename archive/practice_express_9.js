const express = require('express')
const app = express()

app.get('/',(req, res)=>{

  res
  .status(200)
  .json({test:'lol dont be a slave!'})

  
})


const port = 3030
const hostname = 'localhost'

app.listen(port, hostname,() =>{
  console.log(`listening at http://${hostname}:${port}`)
})


