const express = require('express');
const router = express.Router();
const controller = require('../controllers/linkedListController');

router.get('/', controller.getAllNodes);
router.post('/', controller.addNode);
router.delete('/:id', controller.deleteNode);

module.exports = router;
