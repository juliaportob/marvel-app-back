const jwt = require('jsonwebtoken');
const { secret } = require('../auth/CreateToken');
const { getUserByEmail } = require('../models/UserModel');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) return res.status(401).json({ message: 'Please Log in' });
  
    const { userData } = jwt.verify(token, secret);
    console.log(userData, 'token validator userdata')
    const tokenUserEmail = userData[0].email;
    const user = await getUserByEmail(tokenUserEmail);

    if (!user.length) return res.status(404).json({ message: 'Email not found. Please register yourself' });
  
    next();
  } catch (error) {
    next(error);
  }
};