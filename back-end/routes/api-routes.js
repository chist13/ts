const router = require('express').Router()

router.get('*', (req, res) => {
	res.json({data: 'a lot of data'})
})

module.exports = router