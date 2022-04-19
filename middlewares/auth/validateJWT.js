const jwt = require('jsonwebtoken');
// const { User } = require('../../models');

const secret = process.env.JWT_SECRET;

const tokenAuthorization = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    const decoded = jwt.verify(authorization, secret);
    // if (!decoded) return res.status(401).json({ message: 'Expired or invalid token' });
    // const user = await User.findOne({ where: { email: decoded.data.email } });
    // if (!user) return res.status(401).json({ message: 'Expired or invalid token' });
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenAuthorization;