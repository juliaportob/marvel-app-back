const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const FavoriteRouter = require('./controllers/FavoriteController');
const ComicRouter = require('./controllers/ComicController');
const CharacterRouter = require('./controllers/CharacterController');
const UserRouter = require('./controllers/UserController');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => res.send('Hello World'));
app.use(cors());
app.use(bodyParser.json());

app.use('/favorite', FavoriteRouter);
app.use('/comic', ComicRouter);
app.use('/character', CharacterRouter);
app.use('/user', UserRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`rodando na porta ${PORT}`));