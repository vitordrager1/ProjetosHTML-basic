const express = require('express');
const route = require('./route');
const server = express();
const path = require('path')

server.use(route)

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

server.listen(3000, ()=> console.log("RODANDO"))

