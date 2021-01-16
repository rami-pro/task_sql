const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");
const User = require("./user");
const Collection = require("./collection");

class Task extends Model {}

Task.init(
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
    collectionId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Collection,
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "task",
  }
);

module.exports = Task;
