const express = require('express');
const router = express.Router();
const {all, create, update, deleteb} = require('../controllers/books');

router.get('/', all)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', deleteb)

module.exports = router