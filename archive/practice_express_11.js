const express = require('express')
const app = express()

app.get('/',(req, res)=>{

  res
  .status(200)
  .json({message:"Hey bro lets get this money!"})

})

const port = 3030
const hostname = 'localhost'

app.listen(port, hostname,()=>{

  console.log(`We are listening at this URL http://${hostname}:${port}`)

})
