const Reserva = require('../models/reservaModel');

exports.getReservas = async (req, res) => {
  const { id_sesion, hora, fecha_anterior, fecha_siguiente } = req.query;

  try {
    const results = await Reserva.getReservasBySession(id_sesion, hora, fecha_anterior, fecha_siguiente);
    console.log('resultados:', results);
    res.json(results);
  } catch (error) {
    console.error('Error fetching reservations:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.createReserva = async (req, res) => {
    console.log('req.body:', req.body);
    const { reservations } = req.body;
  
    if (!reservations) {
      return res.status(400).send('Bad Request: Missing reservations data');
    }
  
    try {
      for (let reservation of reservations) {
        await Reserva.createReserva(reservation);
      }
      res.status(201).json({ message: 'Reservas creadas con éxito' });
    } catch (err) {
      console.error('Error creando reservas:', err);
      res.status(500).send('Error creando reservas');
    }
};