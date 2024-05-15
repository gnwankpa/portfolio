const express = require('express')
const app = express()

app.get('/',(req, res)=>{
  res
  .status(200)
  .json({message:'Hey man keep it up, cut the fat and make that Money!!!!'})

})

const port = 3030
const hostname = 'localhost'

app.listen(port, hostname,()=>{
  console.log(`listening @ URL: http://${hostname}:${port}`)
})