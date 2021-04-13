const express = require('express');
const router = express.Router();

/* CONTROLLER REQUIRED */
const mainController = require('../controllers/mainController');

/* GET - homepage */
router.get('/', mainController.index);
router.get('/contacto', mainController.contact);

module.exports = router;