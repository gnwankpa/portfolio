const express = require('express');
const app = express()

app.get('/',(req, res, next)=>{
  // trying out the callbacks
  res
  .status(200)
  .json({message:'You are about to make life changing money. In the positivie this year and beyond!!!'})

})

const port = 3030
const hostname = 'localhost'

app.listen(port, hostname,()=>{
  console.log(`we are listening at this URL http://${hostname}:${port} Have a nice day and make your money G!`)
})