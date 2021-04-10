const fetch = require("node-fetch");
const crypto = require("crypto");
require('dotenv').config();

const md5 = (texto) => crypto.createHash("md5").update(texto).digest("hex");

const getCharacter = async (name) => {
  const ts = Date.now();
  const privateKey = process.env.PRIVATE_KEY // env
  const publicKey = process.env.PUBLIC_KEY
  const hash = md5(ts + privateKey + publicKey);
  console.log({ hash });
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
  .then(({data})=> data.results);
  }

module.exports = { getCharacter };
