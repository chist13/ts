const router = require('express').Router()
const url = require('url')
const dummyData = require('../../mock')

const paginate = (data, req, page = 1, res = {perPage: 10}) => {
	res.page = +page
	res.total = data.length
	res.pageCount = Math.max(Math.ceil(res.total / res.perPage), 1)

	res.prev = res.page == 1
		? null
		: `/album/${req.params.id}/page/${res.page - 1}`

	res.next = res.page == res.pageCount
		? null
		: `/album/${req.params.id}/page/${res.page + 1}`

	res.data = data.slice((res.page - 1) * res.perPage, res.page * res.perPage)

	return res
}

router.get('/albums', (req, res) => {
	const list = dummyData.map(e => ({name: e.name, id: e.id, cover: e.cover}))

	res.json(list)
});

router.get('/album/:id', (req, res) => {
	const { id } = req.params

	const album = dummyData.find(e => e.id == id)
	const pagination = paginate(album.images, req)

	const info = {
		name: album.name,
		id: album.id,
		cover: album.cover
	}

	res.json({info, pagination})
})

router.get('/album/:id/page/:page', (req, res) => {
	const { id, page } = req.params

	const album = dummyData.find(e => e.id == id)
	const pagination = paginate(album.images, req, page)

	const info = {
		name: album.name,
		id: album.id,
		cover: album.cover
	}

	res.json({info, pagination})
})

router.all('*', (req, res) => {
	res.status(404).send('not found')
})

module.exports = router