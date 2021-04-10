const { Router } = require('express');
const { getFavoriteService, addFavoriteService, deleteFavoriteService } = require('../services/FavoriteService');
const { FavoriteValidation, DeleteValidation } = require('../middlewares/FavoriteMid');
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
  return res.status(200).json(newFavorite);
});

FavoriteRouter.delete('/delete', DeleteValidation, async (req, res) => {
  const { id } = req.body;
  await deleteFavoriteService(id);
  return res.status(200).send({ message: 'Favorite deleted sucessfully' });
});

module.exports = FavoriteRouter;
