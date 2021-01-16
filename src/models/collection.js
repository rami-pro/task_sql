const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");
const User = require("./user");

class Collection extends Model {}

Collection.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: require("sequelize").UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "collection",
  }
);

module.exports = Collection;
