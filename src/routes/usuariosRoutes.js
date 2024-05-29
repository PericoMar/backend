// src/routes/usuariosRoutes.js

const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/register', usuariosController.register);
router.get('/validateCredentials', usuariosController.validateCredentials);
router.get('/checkUserExists', usuariosController.checkUserExists);

module.exports = router;
