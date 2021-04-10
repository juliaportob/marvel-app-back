const { addUser, getUserById, getUserByEmail, updateUser } = require('../models/UserModel');

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

const updateUserService = async (newName, newEmail, newPassword, userId) => {
  const updatedUser = await updateUser(newName, newEmail, newPassword, userId);
  return updatedUser;
};

module.exports = {
  addUserService,
  getUserByIdService,
  getUserByEmailService,
  updateUserService
};
