const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Token = require("../models/token");
const { Op } = require("sequelize");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer", "").trim();
    const decode = jwt.verify(token, "secret00");

    const user = await User.findOne({ where: { id: decode.userId } });
    const isToken = await Token.findOne({
      where: { [Op.and]: [{ userId: decode.userId }, { token }] },
    });

    if (!isToken) throw new Error();

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports.auth = auth;
