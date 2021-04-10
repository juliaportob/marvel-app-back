const connection = require('./Connection');

const addUser = async (user) => {
  const { name, email, password } = user;
  return connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name,  email, password])
  .then((result) => result[0]);
};

const getUserById = async (id) => {
  const [user] = await connection.query('SELECT * FROM users where id = ?', [id]);
  return user;
};

const getUserByEmail = async (emailLogin) => {
  const [result] = await connection.execute('SELECT * FROM users WHERE email=?', [emailLogin]);
  return result;
};

module.exports = { addUser, getUserById, getUserByEmail };
