const sequelize = require("../../db/sequelize");

const newCollection = async (req, res) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const { name } = req.body;
      const user = req.user;

      const collection = await user.createCollection(
        { name },
        { transaction: t }
      );

      if (!collection) throw new Error();

      return collection;
    });

    res.status(201).send(result);
  } catch (error) {
    res.status(400).send();
  }
};

module.exports = newCollection;
