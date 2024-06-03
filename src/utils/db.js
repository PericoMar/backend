const express = require('express'); 
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: 'admin1',
  database: 'tunutri'
});

module.exports = pool;