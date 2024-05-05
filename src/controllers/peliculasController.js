const Pelicula = require('../models/peliculaModel');

exports.obtenerTodas = async (req, res) => {
  try {
    const peliculas = await Pelicula.obtenerTodas();
    res.json(peliculas);
  } catch (error) {
    console.error('Error al obtener todas las películas:', error);
    res.status(500).json({ error: 'Error al obtener todas las películas' });
  }
};