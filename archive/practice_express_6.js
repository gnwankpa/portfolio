const express = require('express');

let app = express()


app.get('/',(req,res)=>{

  res.status(200).json({this:'this is a test'})
})

let hostname ='localhost'
let port = 3000


app.listen(port, hostname,()=>{
  console.log(`listening @ ${hostname}:${port}`)
})