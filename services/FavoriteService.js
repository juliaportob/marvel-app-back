const { getFavorite } = require('../models/FavoriteModel');

const getFavoriteService = async (id) => getFavorite(id);

module.exports = {
  getFavoriteService,
};