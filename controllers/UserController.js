const { Router } = require('express');
const { addUserService, getUserByIdService, getUserByEmailService, updateUserService } = require('../services/UserService');
const { secret, jwtConfig, createJWTPayload, jwtSign } = require('../auth/CreateToken');
const { validateLogin, validateRegister } = require('../middlewares/LoginMid');
const TokenValidator = require('../middlewares/TokenValidator');
const UserRouter = new Router();

UserRouter.post('/register', validateRegister, async (req, res) => {
  const { name, email, password } = req.body;
  const user = { name, email, password };
  const newUser = await addUserService(user);
  return res.status(201).json(newUser);
});

UserRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const User = await getUserByIdService(id);
  return res.status(200).json(User);
});

UserRouter.post('/login', validateLogin, async (req, res, next) => {
  const user = await getUserByEmailService(req.body.email);
  try {
    if (!user.length) return res.status(404).json({ message: 'Email not found' });
    const payload = createJWTPayload(user);
    const token = jwtSign(payload, secret, jwtConfig);
    return res.status(200)
      .json({
        token,
        name: user[0].name,
        email: user[0].email,
        id: user[0].id,
        password: user[0].password,
      });
  } catch (error) {
    next(error);
  }
});

UserRouter.put('/update', TokenValidator, async (req, res) => {
  const { name: newUserName, email: newEmail, password: newPassord, id: userId } = req.body;
  console.log(req.body, 'req.body backend');
  await updateUserService(newUserName, newEmail, newPassord, userId);
  res.status(200).send({ message: 'User updated sucessfully' });
});

module.exports = UserRouter;
