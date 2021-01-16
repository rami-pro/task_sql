const sequelize = require("../../db/sequelize");

const newTask = async (req, res) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const { title, body, collectionId } = req.body;
      const user = req.user;

      const task = await user.createTask(
        { title, body, collectionId },
        { transaction: t }
      );

      if (!task) throw new Error();

      return task;
    });

    res.status(201).send(result);
  } catch (error) {
    res.status(400).send();
  }
};

module.exports = newTask;
