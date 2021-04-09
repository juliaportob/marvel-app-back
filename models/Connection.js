const mysql = require('mysql2/promise');
require('dotenv').config();

const config = {
  host: process.env.HOSTNAME,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'Marvel-App',
};

const connection = mysql.createPool(config);

module.exports = connection;