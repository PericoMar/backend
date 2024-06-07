const Receta = require('../models/recetaModel');

// Obtener recetas por objetivo
exports.getRecetasByObjetivo = async (req, res) => {
  try {
    const { objetivo } = req.query;
    const recetas = await Receta.findByObjetivo(objetivo);
    res.status(200).json(recetas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener recetas', error });
  }
};