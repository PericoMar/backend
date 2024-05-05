const express = require('express');
const router = express.Router();
const peliculasController = require('../controllers/peliculasController');

router.get('/peliculas', peliculasController.obtenerTodas);

module.exports = router;