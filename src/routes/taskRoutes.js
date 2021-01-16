const express = require("express");
const { auth } = require("../middleware/auth");

const router = express.Router();

//-----ROUTE Handlers-----//
const createTask = require("../routeHandlers/task/createTask");
const deleteTask = require("../routeHandlers/task/deleteTask");
const getTasks = require("../routeHandlers/task/getTasks");
const updateTask = require("../routeHandlers/task/updateTask");

//-----ROUTES------//
router.post("/tasks", auth, createTask);
router.delete("/tasks/:id", auth, deleteTask);
router.get("/tasks/:collectionId", auth, getTasks);
router.patch("/tasks/:id", auth, updateTask);

module.exports = router;
