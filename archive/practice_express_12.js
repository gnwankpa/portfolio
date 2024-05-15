const express = require('express');
const app = express()

app.get('/',(req,res)=>{

  res
  .status(200)
  .json({message:'We are all about generational money right now! Work Smart!'})

})


const hostname = 'localhost'
const port = 3030

app.listen(port, hostname,()=>{
  console.log(`listening @ this URL http://${hostname}:${port}`)
})

