"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Post, Like, Comment }) {
      this.hasMany(Post, { foreignKey: "userId" });
      this.hasMany(Like, { foreignKey: "userId" });
      this.hasMany(Comment, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
