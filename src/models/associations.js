const User = require("./user");
const Task = require("./task");
const Collection = require("./collection");
const Token = require("./token");

User.hasMany(Task);
Task.belongsTo(User);

User.hasMany(Collection);
Collection.belongsTo(User);

User.hasMany(Token);
Token.belongsTo(User);

Collection.hasMany(Task);
Task.belongsTo(Collection);

module.exports = {
  User,
  Task,
};
