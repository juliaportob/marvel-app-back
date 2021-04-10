const { Router } = require('express');
const { comicDataByTitle, comicDataById } = require('../services/MarvelService');
const ComicRouter = new Router();

ComicRouter.get('/title/:title', async (req, res) => {
  const { title } = req.params;
  const comic = await comicDataByTitle(title);
  return res.status(200).json(comic);
});

ComicRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const comic = await comicDataById(id);
  return res.status(200).json(comic);
});

module.exports = ComicRouter;
