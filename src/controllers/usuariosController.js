// src/controllers/usuariosController.js

const User = require('../models/usuarioModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Registro de usuario
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar si el usuario ya existe
    console.log("email-register",email);
    const existingUser = await User.findByEmail(email);
    console.log("existinguser:",existingUser)
    if (existingUser) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    // Hash de la contraseña antes de guardar
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Crear y guardar el nuevo usuario
    await User.create(email, hashedPassword);

    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario', error });
  }
};

// Validar credenciales
exports.validateCredentials = async (req, res) => {
  try {
    const { email, password } = req.query;
    console.log("email", email);
    console.log("contraseña", password);
    // Buscar el usuario por correo
    const user = await User.findByEmail(email);
    console.log(user);
    if (!user || user == null) {
      return res.status(400).json({ message: 'Usuario no existe' });
    }
    console.log(user);
    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.passwd);
    console.log("booleano",isPasswordValid);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    res.status(200).json({ message: 'Credenciales válidas' });
  } catch (error) {
    res.status(500).json({ message: 'Error al validar credenciales', error });
  }
};

// Verificar si el usuario existe
exports.checkUserExists = async (req, res) => {
  try {
    
    const { email } = req.query;
    console.log(email);
    
    const user = await User.findByEmail(email);
    console.log(user);
    res.status(200).json({ exists: !!user });
  } catch (error) {
    res.status(500).json({ message: 'Error al verificar usuario', error });
  }
};
