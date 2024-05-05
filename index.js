// index.js

const express = require('express');
const app = express();

// Importar las rutas
const peliculasRoutes = require('./src/routes/peliculasRoutes');
const sesionesRoutes = require('./src/routes/sesionesRoutes');
const reservasRoutes = require('./src/routes/reservasRoutes');
const usuariosRoutes = require('.src/router/usuariosRoutes');
// Importa otras rutas según sea necesario

// Registrar las rutas en la aplicación
app.use(peliculasRoutes);
// app.use(sesionesRoutes);
// app.use(reservasRoutes);
// app.use(usuariosRoutes);
// Usa otras rutas según sea necesario

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
