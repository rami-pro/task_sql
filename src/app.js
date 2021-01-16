const express = require("express");
const userRouter = require("./routes/userRoutes");
const collectionRoutes = require("./routes/collectionRoutes");
const taskRoutes = require("./routes/taskRoutes");

require("./db/sequelize");
require("./models/associations");

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(collectionRoutes);
app.use(taskRoutes);

module.exports = app;
