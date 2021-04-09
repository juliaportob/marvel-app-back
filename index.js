const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { LoginController } = require('./controllers');
// const { error } = require('./services');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/login', LoginController);

// app.use('/images', express.static(path.join(__dirname, '/images')));
// app.use(error);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`rodando na porta ${PORT}`));