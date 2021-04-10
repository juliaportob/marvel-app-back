const { getByUserId, getFavoriteById } = require('../models/FavoriteModel');

const FavoriteValidation = async (req, res, next) => {
  const { id_favorite: favorite, user_id } = req.body;

  const getUser = await getByUserId(user_id);

  const filter = getUser.find((element) => element.id_favorite == favorite);

  if(filter) return res.status(401).json({ message: 'It is already your favorite' });
  
  next();
};

const DeleteValidation = async (req, res, next) => {
  const { id } = req.body;
  console.log(id, 'id mid')

  const getFavorite = await getFavoriteById(id);

  if(getFavorite.length === 0) res.status(404).json({ message: 'Favorite not found' });

  next();
}

module.exports = { FavoriteValidation, DeleteValidation };
