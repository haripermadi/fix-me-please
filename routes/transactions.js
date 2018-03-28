const express = require('express');
const router = express.Router()
const {all, create, update, deleted} = require('../controllers/transactions');

router.get('/', all)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', deleted)

module.exports = router