const express = require('express')
const router = express.Router()
const AdminController = require('../controllers/AdminController')

router.patch('/:id/update', AdminController.update)
router.get('/:id/edit', AdminController.edit)
router.get('/:id/delete', AdminController.delete)
router.post('/create', AdminController.create)
router.get('/new', AdminController.new)
router.get('/', AdminController.index)

module.exports = router