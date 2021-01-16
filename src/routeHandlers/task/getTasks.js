const { Op } = require("sequelize");
const sequelize = require("../../db/sequelize");
const Task = require("../../models/task");

const getTasks = async (req, res) => {
  try {
    const user = req.user;
    const collectionId = req.params.collectionId;

    const tasks = await Task.findAll({
      where: {
        [Op.and]: [{ collectionId }, { userId: user.id }],
      },
    });

    if (!tasks.length) throw new Error();

    res.status(200).send(tasks);
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
};

module.exports = getTasks;
