const mix = require('laravel-mix')
const config = require('./config')

mix
	.browserSync(`localhost:${config.port}`)

	.react('front-end/main.js', 'public/js/')