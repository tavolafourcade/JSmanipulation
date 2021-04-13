const express = require('express');
const router = express.Router();

/* CONTROLLER REQUIRED */
const mainController = require('../controllers/mainController');

/* GET - homepage */
router.get('/', mainController.index);

module.exports = router;