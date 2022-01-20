const express = require('express')
const router = express.Router()
const videoController = require('../controllers/VideoController')

router.get('/:slug', videoController.detail)
router.get('/', videoController.index)

module.exports = router