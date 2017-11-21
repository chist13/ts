const http = require('http')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const config = require('./config')

/**
 * create the app
 */
const app = express()

/**
 * routes
 */
const entryRoutes = require('./back-end/routes/entry-routes')
const apiRoutes = require('./back-end/routes/api-routes')

/**
 * set port
 */
app.set('port', config.port)

/**
 * view engine setup
 */
app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'pug')

/**
 * middleware setup
 */
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(process.env.NODE_ENV !== 'test' ? logger('dev') : (req, res, next) => next())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

/**
 * register routes
 */
app.use('/api', apiRoutes)
app.use('/', entryRoutes)

/**
 * create HTTP server
 */
http.createServer(app)
	.listen(config.port)
	.on('error', err => {
		throw new Error(err)
	})
	.on('listening', () => {
		console.clear()
		console.log(`Listening on ${config.port} port`)
	})
