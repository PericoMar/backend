// index.js

const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); // Reemplaza con el origen de tu aplicación Angular
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


// Importar las rutas
const peliculasRoutes = require('./src/routes/peliculasRoutes');
// const sesionesRoutes = require('./src/routes/sesionesRoutes');
// const reservasRoutes = require('./src/routes/reservasRoutes');
// const usuariosRoutes = require('.src/routes/usuariosRoutes');
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
