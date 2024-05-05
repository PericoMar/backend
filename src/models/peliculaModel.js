const db = require('../utils/db');

class Pelicula {
  static async obtenerTodas() {
    try {
      const query = 'SELECT * FROM Peliculas';
      const [peliculas] = await db.query(query);
      return peliculas;
    } catch (error) {
      console.error('Error al obtener todas las películas:', error);
      throw error;
    }
  }
}

module.exports = Pelicula;