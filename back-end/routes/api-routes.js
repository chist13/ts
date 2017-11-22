const router = require('express').Router()
const dummyData = require('../../mock')

router.get('/albums', (req, res) => {
	const list = dummyData.map(e => ({id: e.id, name: e.name, img: e.img}))

	res.json(list)
});

router.get('/album/:id/page/:page', (req, res) => {
	const album = dummyData.find(e => e.id == req.params.id)

	res.json(album)
})

router.get('/album/:id', (req, res) => {
	const album = dummyData.find(e => e.id == req.params.id)

	res.json(album)
})

router.all('*', (req, res) => {
	res.status(404).send('not found')
})

module.exports = router