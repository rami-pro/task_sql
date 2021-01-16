const express = require("express");
const { User, Task } = require("../models/associations");
const sequelize = require("../db/sequelize");
const { Op } = require("sequelize");
const { auth } = require("../middleware/auth");

const router = express.Router();

//-----ROUTE Handlers-----//
const signup = require("../routeHandlers/user/signup");
const signin = require("../routeHandlers/user/signin");

//-----ROUTES------//
router.post("/users", signup);
router.post("/users/signin", signin);

module.exports = router;
