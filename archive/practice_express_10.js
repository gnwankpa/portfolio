const express = require('express')
const app = express()


app.get('/',(req, res)=>{

  res
  .status(200)
  .json({test:'dont be a slave bro!'})


})


const port = 3030
const hostname = 'localhost'

app.listen(port, hostname,()=>{
  console.log(`listening at this URL http://${hostname}:${port}`)
})