const { Router } = require('express');
const { comicDataByTitle, comicDataById } = require('../services/MarvelService');
const { getComics } = require ('../models/MarvelModel');
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

ComicRouter.get('/all/:offset', async (req, res) => {
  const { offset } = req.params;
  const character = await getComics(offset);
  return res.status(200).json(character);
});

module.exports = ComicRouter;
