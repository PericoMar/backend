const db = require('../utils/db');

class Peso {
  static async findByUserEmail(email) {
    try {
      const query = `SELECT * FROM Pesos WHERE id_usuario = ?`;
      const [pesos] = await db.query(query, [email]);
      return pesos;
    } catch (error) {
      throw error;
    }
  }

  static async create(id_usuario, peso, dia) {
    try {
      const query = `INSERT INTO Pesos (id_usuario, peso, dia) VALUES (?, ?, ?)`;
      await db.query(query, [id_usuario, peso, dia]);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Peso;