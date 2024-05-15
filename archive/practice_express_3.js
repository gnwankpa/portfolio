const express = require('express');

var app = express()

const randomNumbers = [4, 11, 42, 14, 39];

const reducer = (arr)=>{
  return arr.reduce((a,b)=>{
    return a+b
  })
}

const filter = (arr)=>{
  return arr.filter((a)=> {
    return a > 11
  })
}

const sorter = (arr)=>{
  return arr.sort((a, b)=> {
    return b-a
  })
}

const exPromise =() =>{
  return new Promise((resolve,reject)=>{
    resolve('test')
  })
}

app.get('/',(req, res)=>{
  res.status(200).json({reduce: reducer(randomNumbers), filter:filter(randomNumbers), sorter:sorter(randomNumbers)})
})

let port = 3000
let hostname = 'localhost'

const startHTTPServer = app.listen(port, hostname, ()=>{
  console.log(`we are up and running at http${hostname}:${port}`)
})