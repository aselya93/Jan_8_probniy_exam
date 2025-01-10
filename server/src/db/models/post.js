"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate({ User, Like, Comment }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.hasMany(Like, { foreignKey: "postId" });
      this.hasMany(Comment, { foreignKey: "postId" });
    }
  }
  Post.init(
    {
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      likeCount: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
