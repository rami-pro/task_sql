const sequelize = require("../../db/sequelize");

const getCollections = async (req, res) => {
  try {
    const user = req.user;
    const collections = await user.getCollections();

    res.status(200).send(collections);
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
};

module.exports = getCollections;
