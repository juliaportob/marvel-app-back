const { Router } = require('express');
const { addUserService, getUserByIdService } = require('../services/UserService');
const UserRouter = new Router();

UserRouter.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const user = { name, email, password };
  console.log(user, 'userrrr');
  const newUser = await addUserService(user);
  return res.status(200).json(newUser);
});

UserRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const User = await getUserByIdService(id);
  return res.status(200).json(User);
});


module.exports = UserRouter;
