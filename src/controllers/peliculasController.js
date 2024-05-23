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

exports.obtenerPorId = async (req, res) => {
  try {
    const id = req.params.id; // Obtener el id de los parámetros de la URL
    const pelicula = await Pelicula.obtenerPeliculaPorId(id);
    if (!pelicula) {
      return res.status(404).json({ error: 'Película no encontrada' });
    }
    res.json(pelicula);
  } catch (error) {
    console.error('Error al obtener película por ID:', error);
    res.status(500).json({ error: 'Error al obtener película por ID' });
  }
};