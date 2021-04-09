const { Router } = require('express');
const { getFavoriteService } = require('../services/FavoriteService');

const FavoriteRouter = new Router();

FavoriteRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const favorite = await getFavoriteService(id);
  return res.status(200).json(favorite);
});

module.exports = FavoriteRouter;