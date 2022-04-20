const error = (status, message) => ({ status, message });

const nameValidation = (name) => {
  if (!name) throw error(400, '"name" is required');
};

const categoryValidate = async (req, res, next) => {
  const { name } = req.body;
  try {
    nameValidation(name);
    next();
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

module.exports = {
  categoryValidate,
};
