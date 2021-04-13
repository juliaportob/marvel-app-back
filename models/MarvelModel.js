const fetch = require("node-fetch");
const crypto = require("crypto");
require('dotenv').config();

const md5 = (texto) => crypto.createHash("md5").update(texto).digest("hex");
const ts = Date.now();
const privateKey = process.env.PRIVATE_KEY
const publicKey = process.env.PUBLIC_KEY
const hash = md5(ts + privateKey + publicKey);

const getCharacterByName = async (name) => {
  return fetch(
    `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&name=${name}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  .then((response)=>response.json())
  .then(({data})=> data.results[0]);
}

const getComicByTitle = async (title) => {
  return fetch(
    `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&title=${title}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  .then((response)=>response.json())
  .then(({data})=> data.results[0]);
}

const getComicById = async (id) => {
  return fetch(
    `http://gateway.marvel.com/v1/public/comics/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  .then((response)=>response.json())
  .then(({data})=> data.results[0]);
}

const getCharacterById = async (id) => {
  return fetch(
    `http://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  .then((response)=>response.json())
  .then(({data})=> data.results[0]);
}

const getCharacters = async (offset) => {
  return fetch(
    `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=10&offset=${offset}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }
  )
  .then((response)=>response.json())
  .then(({data})=> data.results);
}

const getComics = async (offset) => {
  return fetch(
    `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=10&offset=${offset}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }
  )
  .then((response)=>response.json())
  .then(({data})=> data.results);
}

module.exports = { getCharacterByName, getComicByTitle, getComicById, getCharacterById, getCharacters, getComics };
