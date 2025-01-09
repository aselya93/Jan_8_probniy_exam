"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ User, Post }) {
      this.belongsTo(User, { foreignKey: "userId", as: 'user' });
      this.belongsTo(Post, { foreignKey: "postId", as: "post" });
    }
  }
  Like.init(
    {
      userId: DataTypes.INTEGER,
      postId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Like",
      uniqueKeys: {
        like_unique: {
          fields: ["userId", "postId"],
        },
      },
    }
  );
  return Like;
};
