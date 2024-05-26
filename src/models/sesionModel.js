const db = require('../utils/db');

class Sesiones {
  static async obtenerSesionesPorId(id) {
    try{
      const query = `SELECT hora, id_sesion FROM Sesiones WHERE id_pelicula = ${id}`;
      const [sesiones] = await db.query(query);
      console.log(sesiones);
      return sesiones;
    } catch(error){
      console.log('Error');
      throw error;
    }
  }
}

module.exports = Sesiones;