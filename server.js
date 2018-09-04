const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()


// const expressVueMiddleware = express.init
// app.use(expressVueMiddleware)

app.use(serveStatic(path.join(__dirname + "src/dist")))
// app.use(express.static(path.join(__dirname, './public')))
const port = process.env.PORT || 5000
app.listen(port)
// eslint-disable-next-line no-console
console.log('Listening on port '+ port)

