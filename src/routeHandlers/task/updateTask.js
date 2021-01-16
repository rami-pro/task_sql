const { Op } = require("sequelize");
const sequelize = require("../../db/sequelize");
const Task = require("../../models/task");

const updateTask = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["title", "body"];
  const isValid = updates.every((update) => allowedUpdates.includes(update));

  if (!isValid) return res.status(400).send();

  try {
    const result = await sequelize.transaction(async (t) => {
      const user = req.user;
      const taskId = req.params.id;

      const task = await Task.findOne({
        where: {
          [Op.and]: [{ id: taskId }, { userId: user.id }],
        },
      });

      if (!task) throw new Error();

      updates.forEach((update) => (task[update] = req.body[update]));

      await task.save({ transaction: t });

      return task;
    });

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
};

module.exports = updateTask;
