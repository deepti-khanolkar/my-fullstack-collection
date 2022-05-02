const express = require('express')
const path = require('path')

const server = express()
const routes = require('./routes/routes')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/books', routes)
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
