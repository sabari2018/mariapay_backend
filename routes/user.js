const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');


router.post('/login', userCtrl.login);
router.get('/',auth, userCtrl.getAllUser);

module.exports = router;
