const modelBlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'User',
    });
  };

  return blogPost;
};

module.exports = modelBlogPost;