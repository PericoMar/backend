const db = require('../utils/db');

class Pelicula {
  static async obtenerTodas() {
    try {
      const query = 'SELECT * FROM Peliculas';
      const [peliculas] = await db.query(query);
      console.log(peliculas);
      return peliculas;
    } catch (error) {
      console.error('Error al obtener todas las películas:', error);
      throw error;
    }
  }

  static async obtenerPeliculaPorId(id) {
    try{
      const query = `SELECT * FROM Peliculas WHERE id_pelicula = ${id}`;
      const [pelicula] = await db.query(query);
      console.log(pelicula);
      return pelicula;
    } catch(error){
      console.log('Error');
      throw error;
    }
  }
}

module.exports = Pelicula;