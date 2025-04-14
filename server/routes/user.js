const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

router.get('/', userController.getUserInfo);
router.put('/', userController.updateUserInfo);

module.exports = router;
