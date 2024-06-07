// index.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); // Reemplaza con el origen de tu aplicación Angular
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(bodyParser.json());

const usuariosRoutes = require('./src/routes/usuariosRoutes');
const pesosRoutes = require('./src/routes/pesosRoutes');
const recetasRoutes = require('./src/routes/recetasRoutes');

app.use(usuariosRoutes);
app.use(pesosRoutes);
app.use(recetasRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
