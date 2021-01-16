const sequelize = require("../../db/sequelize");
const User = require("../../models/user");
const signup = async (req, res) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const user = await User.create(req.body, { transaction: t });
      const token = await user.generateAuthToken(t);

      return { user, token };
    });
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send({ error: "error creating a new user" });
  }
};

module.exports = signup;
