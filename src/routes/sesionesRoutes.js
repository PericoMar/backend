const express = require('express');
const router = express.Router();
const sesionesController = require('../controllers/sesionesController');

router.get('/sesiones/:id', sesionesController.obtenerPorId);

module.exports = router;