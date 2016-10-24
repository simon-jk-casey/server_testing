const express = require('express')
const hbs = require('handlebars')
const routes = require('./routes')

const server = express()

module.exports = server

//CONFIGURATION
//middleware
server.engine('hbs', hbs ({
  extname: 'hbs',
  defaultLayout: 'main'
}))

server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))

//google handlebars and css to style (PUBLIC folder with css inside)
