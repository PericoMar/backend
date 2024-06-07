const express = require('express');
const router = express.Router();
const recetasController = require('../controllers/recetasController');

// Ruta para obtener recetas por objetivo
router.get('/getRecetas', recetasController.getRecetasByObjetivo);

module.exports = router;