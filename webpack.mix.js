const mix = require('laravel-mix')
const config = require('./config')

mix
	.browserSync(`localhost:${config.port}`)

	.react('front-end/main.js', 'public/js/')

	.webpackConfig({
		resolve: {
			alias: {
				'&': path.resolve(__dirname, 'front-end'),
				'#': path.resolve(__dirname, 'front-end/store/modules'),
				'@': path.resolve(__dirname, 'front-end/shared')
			}
		}
	})