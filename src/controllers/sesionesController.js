const Sesiones = require('../models/sesionModel');


exports.obtenerPorId = async (req, res) => {
    try {
      const id = req.params.id; // Obtener el id de los parámetros de la URL
      const sesiones = await Sesiones.obtenerSesionsPorId(id);
      if (!sesiones) {
        return res.status(404).json({ error: 'Sesiones no encontradas' });
      }
      res.json(sesiones);
    } catch (error) {
      console.error('Error al obtener sesiones por ID:', error);
      res.status(500).json({ error: 'Error al obtener sesiones por ID' });
    }
  };