// src/models/user.model.js

const db = require('../utils/db');

class User {
  static async findByEmail(email) {
    try {
        console.log(email);
      const query = `SELECT * FROM Usuarios WHERE correo = ?`;
      const [users] = await db.query(query, [email]);
      console.log("users",users[0])
      return users[0];
    } catch (error) {
      throw error;
    }
  }

  static async create(email, hashedPassword) {
    try {
      const query = `INSERT INTO Usuarios (correo, passwd) VALUES (?, ?)`;
      await db.query(query, [email, hashedPassword]);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
