const db = require('../utils/db');

const Reserva = {
  getReservasBySession: async (id_sesion, hora, fecha_anterior, fecha_siguiente) => {
    const query = `
      SELECT * FROM Reservas
      WHERE id_sesion = ?
      AND (
        (dia >= ? AND hora > ?)
        OR
        (dia <= ? AND hora < ?)
      )
    `;

    // Log the query with parameters
    console.log('Query:', query);
    console.log('Parameters:', [id_sesion, fecha_anterior, hora, fecha_siguiente, hora]);

    const [rows] = await db.query(query, [id_sesion, fecha_anterior, hora, fecha_siguiente, hora]);
    console.log('res: ', rows);
    return rows;
  },

  createReserva: async (reservation) => {
    const query = `
      INSERT INTO Reservas (id_sesion, fila, columna, id_usuario, dia, hora)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const params = [reservation.id_sesion, reservation.fila, reservation.columna, reservation.correo, reservation.dia, reservation.hora];

    await db.query(query, params);
  }
};

module.exports = Reserva;
