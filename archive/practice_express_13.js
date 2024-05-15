const express = require('express')
const app = express()


app.get('/',(req,res)=>{

  res
  .status(200)
  .json({message:'We are about winning today and making moves for big money!'})

})

const hostname ='localhost'
const port = 3030

app.listen(port, hostname,()=>{

    console.log(`we are listing @ URL http://${hostname}:${port}`)
})