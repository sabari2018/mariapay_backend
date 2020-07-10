const express = require('express');
const router = express.Router();
const serviceCtrl = require('../controllers/service');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.post('/',auth, multer,serviceCtrl.createService);

module.exports = router;
