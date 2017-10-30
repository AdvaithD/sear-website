const express = require('express')
const app = express()
const server = require('http').Server(app)
const path = require('path')
app.use(express.static('public'))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

server.listen(3000)
