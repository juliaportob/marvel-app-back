const { Router } = require('express');
const { getCharacter } = require('../models/MarvelModel');
const MarvelRouter = new Router();

MarvelRouter.get('/:name', async (req, res) => {
  const { name } = req.params;
  const favorite = await getCharacter(name);
  return res.status(200).json(favorite);
});

module.exports = MarvelRouter;