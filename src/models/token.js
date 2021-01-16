const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");
const User = require("./user");

class Token extends Model {}

Token.init(
  {
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "token",
  }
);

module.exports = Token;
