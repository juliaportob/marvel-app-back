const { Router } = require('express');
const { getFavoriteService, addFavoriteService } = require('../services/FavoriteService');
const { FavoriteValidation } = require('../middlewares/FavoriteMid');
const FavoriteRouter = new Router();

FavoriteRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const favorite = await getFavoriteService(id);
  return res.status(200).json(favorite);
});

FavoriteRouter.post('/', FavoriteValidation, async (req, res) => {
  const { id_favorite, name, url_image, user_id } = req.body;
  const fav = { id_favorite, name, url_image, user_id };
  const newFavorite = await addFavoriteService(fav);
  // const { insertId } = newFavorite;
  return res.status(200).json(newFavorite);
});

module.exports = FavoriteRouter;
