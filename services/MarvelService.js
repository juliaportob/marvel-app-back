const { getCharacterByName, getComicByTitle, getComicById, getCharacterById } = require('../models/MarvelModel');

const characterDataByName = async (name) => {
  const responseAPIByName = await getCharacterByName(name);
  const characterData = {
    'id': responseAPIByName.id,
    'name': responseAPIByName.name,
    'image': `${responseAPIByName.thumbnail.path}.${responseAPIByName.thumbnail.extension}`,
  };

  return characterData;
};

const comicDataByTitle = async (title) => {
  const responseAPIByTitle = await getComicByTitle(title);
  const comicData = {
    'id': responseAPIByTitle.id,
    'title': responseAPIByTitle.title,
    'image': `${responseAPIByTitle.thumbnail.path}.${responseAPIByTitle.thumbnail.extension}`,
  };

  return comicData;
};

const comicDataById = async (id) => {
  const responseAPIById = await getComicById(id);
  const comicData = {
    'id': responseAPIById.id,
    'title': responseAPIById.title,
    'description': responseAPIById.description,
    'externalInformation': responseAPIById.urls[0].url,
    'characters': responseAPIById.characters.items,
    'image': `${responseAPIById.thumbnail.path}.${responseAPIById.thumbnail.extension}`,
  };

  return comicData;
};

const characterDataById = async (id) => {
  const responseAPIById = await getCharacterById(id);
  const characterData = {
    'id': responseAPIById.id,
    'name': responseAPIById.name,
    'description': responseAPIById.description,
    'externalInformation': responseAPIById.urls[1].url,
    'comics': responseAPIById.comics.items,
    'image': `${responseAPIById.thumbnail.path}.${responseAPIById.thumbnail.extension}`,
  };

  return characterData;
};


module.exports = {
  characterDataByName,
  comicDataByTitle,
  comicDataById,
  characterDataById
};
