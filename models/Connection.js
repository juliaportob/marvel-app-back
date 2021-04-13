const mysql = require('mysql2/promise');
require('dotenv').config();

const config = {
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'bd4924fa610466',
  password: 'edf0e894',
  database: 'heroku_d5a595fd89af2b4',
};

const connection = mysql.createPool(config);

module.exports = connection;
