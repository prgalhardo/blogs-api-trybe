const jwt = require('jsonwebtoken');
const { User } = require('../../models');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    const decoded = jwt.verify(authorization);
    const user = await User.findOne({ where: { displayName: decoded.data.displayName } });
    if (!user) return res.status(401).json({ message: 'Token invalid' });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};