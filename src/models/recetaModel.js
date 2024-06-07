const db = require('../utils/db');

class Receta {
  static async findByObjetivo(objetivo) {
    try {
      const query = `SELECT * FROM Recetas WHERE objetivo = ?`;
      const [recetas] = await db.query(query, [objetivo]);
      return recetas;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Receta;