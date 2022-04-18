const jwt = require('jsonwebtoken');
const { User } = require('../models');

module.exports = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    console.log(user);
    const secret = process.env.JWT_SECRET;
    
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
  
    const token = jwt.sign(user.dataValues, secret, jwtConfig);
    return res.status(201).json({ token });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
