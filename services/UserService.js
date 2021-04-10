const { addUser, getUserById, getUserByEmail } = require('../models/UserModel');

const addUserService = async (user) => {
  const verifyEmail = await getUserByEmail(user.email);
  if (verifyEmail.length) return false;
  const response = await addUser(user);
  return response;
}

const getUserByIdService = async (id) => getUserById(id);

const getUserByEmailService = async (emailLogin) => {
  const resultService = await getUserByEmail(emailLogin);
  return resultService;
}

module.exports = {
  addUserService,
  getUserByIdService,
  getUserByEmailService,
};
