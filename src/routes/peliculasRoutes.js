const express = require('express');
const router = express.Router();
const peliculasController = require('../controllers/peliculasController');

router.get('/peliculas', peliculasController.obtenerTodas);
router.get('/pelicula/:id', peliculasController.obtenerPorId);

module.exports = router;