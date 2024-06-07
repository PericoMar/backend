const Peso = require('../models/pesoModel');

// Obtener pesos por correo electrónico del usuario
exports.getPesosByUser = async (req, res) => {
  try {
    const { email } = req.query;
    console.log(email);
    const pesos = await Peso.findByUserEmail(email);
    res.status(200).json(pesos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los pesos', error });
  }
};

// Registrar un nuevo peso
exports.registerPeso = async (req, res) => {
  try {
    const { id_usuario, peso, dia } = req.body;
    console.log(`id: ${id_usuario} y peso:${peso} y dia:${dia}`)
    await Peso.create(id_usuario, peso, dia);
    res.status(201).json({ message: 'Peso registrado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el peso', error });
  }
};