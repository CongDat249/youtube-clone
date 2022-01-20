const express = require('express')
const router = express.Router()
const AdminController = require('../controllers/AdminController')

router.post('/create', AdminController.create)
router.get('/new', AdminController.new)
router.get('/', AdminController.index)

module.exports = router