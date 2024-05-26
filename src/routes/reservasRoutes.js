const express = require('express');
const router = express.Router();
const reservasController = require('../controllers/reservasController');

router.get('/reservas', reservasController.getReservas);
router.post('/reservas', reservasController.createReserva);

module.exports = router;
