const { login } = require('../services/loginService');
const token = require('../services/generateToken');

const loginController = async (req, res, _next) => {
  const { email, password } = req.body;
  try {
    const loginInfos = await login({ email, password });
    return res.status(200).json({ token: token(loginInfos.id) });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  loginController,
};
