const express = require('express')
const app = express()
const port = 3000

const { goodbye } = require('./utils');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/goodbye', (req, res) => {
  res.send(goodbye({ interface: req.query.interface}));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
