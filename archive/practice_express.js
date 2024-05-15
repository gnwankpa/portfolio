const express = require('express');

var app = express()

app.get('/', (req, res) => {
    res.status(200)
    res.json('hello')
  })

app.get('/api', (req, res) => {
    res.status(200)
    res.json('API')
  })

app.post('/', (req, res) => {
    res.status(200)
    res.json('hello')
  })

const hostname = 'localhost'
const port = 3021;

const serverHTTP  = app.listen(port, hostname, () => {
        console.log(`starting bitbot server at http://${hostname}:${port} `);
});
  