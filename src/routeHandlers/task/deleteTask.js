const { Op } = require("sequelize");
const sequelize = require("../../db/sequelize");
const Task = require("../../models/task");

const deleteTask = async (req, res) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const taskId = req.params.id;
      const user = req.user;

      const task = await Task.findOne({
        where: {
          [Op.and]: [{ id: taskId }, { userId: user.id }],
        },
      });

      if (!task) throw new Error();

      await Task.destroy(
        {
          where: {
            [Op.and]: [{ id: taskId }, { userId: user.id }],
          },
        },
        { transaction: t }
      );

      return task;
    });

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
};

module.exports = deleteTask;
