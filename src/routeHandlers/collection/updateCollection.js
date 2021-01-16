const { Op } = require("sequelize");
const sequelize = require("../../db/sequelize");
const Collection = require("../../models/collection");

const updateCollection = async (req, res) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const collectionId = req.params.id;
      const user = req.user;
      const { name } = req.body;

      const collection = await Collection.findOne({
        where: {
          [Op.and]: [{ id: collectionId }, { userId: user.id }],
        },
      });

      if (!collection) throw new Error();

      collection.name = name;
      await collection.save({ transaction: t });

      return collection;
    });

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
};

module.exports = updateCollection;
