const express = require('express-vue')
const path = require('path')
const serveStatic = require('serve-static')
const server = express()
const expressVueMiddleware = express.init
server.use(expressVueMiddleware)

server.use(serveStatic(path.join(__dirname + "/dist")))
// server.use(express.static(path.join(__dirname, './public')))
const port = process.env.PORT || 5000
server.listen(port)
// eslint-disable-next-line no-console
console.log('Listening on port '+ port)

