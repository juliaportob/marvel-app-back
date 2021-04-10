const { getUserByEmail } = require('../models/UserModel');

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!email || !password) {
    return res.status(401).json({ message: 'Incorrect username or password' })
  }

  if (user.length > 0 && user[0].password !== password) return res.status(401).json({ message: 'Incorrect password. Please try again' });

  if (!user) return res.status(404).json({ message: 'Email not found. Please register yourself' });

  next();
};

const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    return res.status(401).json({ message: 'Please complete all the fields' });
  }
  next();
};

module.exports = { validateLogin, validateRegister };
