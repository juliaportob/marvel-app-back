const { getFavorite, addFavorite } = require('../models/FavoriteModel');

const getFavoriteService = async (id) => getFavorite(id);

const addFavoriteService = async (fav) => addFavorite(fav);

module.exports = {
  getFavoriteService,
  addFavoriteService,
};
