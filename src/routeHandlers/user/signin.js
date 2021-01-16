const User = require("../../models/user");
const signin = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const result = await User.signin(userName, password);
    if (!result) throw new Error();
    res.send(result);
  } catch (error) {
    res.status(400).send({ error: "error login a user" });
  }
};

module.exports = signin;
