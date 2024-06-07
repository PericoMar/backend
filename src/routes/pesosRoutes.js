const express = require('express');
const router = express.Router();
const pesosController = require('../controllers/pesosController');

router.get('/getPesos', pesosController.getPesosByUser);
router.post('/registerPeso', pesosController.registerPeso);

module.exports = router;