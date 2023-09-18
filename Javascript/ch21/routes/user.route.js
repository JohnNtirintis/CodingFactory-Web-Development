const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller')

router.get('/', userController.findAllUsers);
router.get('/:username', userController.findOne);
router.post('/', userController.create);
router.patch('/', userController.update);
// router.patch('/update', userController.update);
router.delete('/:username', userController.delete);

module.exports = router;