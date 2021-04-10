const { Router } = require('express');
const { addUserService, getUserByIdService, getUserByEmailService } = require('../services/UserService');
const { secret, jwtConfig, createJWTPayload, jwtSign } = require('../auth/CreateToken');
const { validateLogin, validateRegister } = require('../middlewares/LoginMid');
const UserRouter = new Router();

UserRouter.post('/register', validateRegister, async (req, res) => {
  const { name, email, password } = req.body;
  const user = { name, email, password };
  const newUser = await addUserService(user);
  return res.status(200).json(newUser);
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
      });
  } catch (error) {
    next(error);
  }
});

module.exports = UserRouter;
