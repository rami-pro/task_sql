const { Model, DataTypes } = require("sequelize");
const jwt = require("jsonwebtoken");
const sequelize = require("../db/sequelize");
const Token = require("./token");

class User extends Model {
  static greeting() {
    return "hello world!";
  }

  static async signin(userName, password) {
    try {
      const result = await sequelize.transaction(async (t) => {
        let user = await User.findOne(
          {
            where: {
              userName,
            },
          },
          {
            transaction: t,
          }
        );

        if (user.password !== password) throw new Error();

        let token = await user.generateAuthToken(t);

        return { user, token };
      });

      return result;
    } catch (error) {}
  }
  async generateAuthToken(t) {
    try {
      const user = this;
      let token = jwt.sign({ userId: user.id }, "secret00");
      await Token.create({ userId: user.id, token }, { transaction: t });
      return token;
    } catch (error) {}
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: require("sequelize").UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user",
    indexes: [
      {
        unique: true,
        fields: ["userName"],
      },
    ],
  }
);

module.exports = User;
