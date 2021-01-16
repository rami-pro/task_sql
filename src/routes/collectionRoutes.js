const express = require("express");
const { auth } = require("../middleware/auth");

const router = express.Router();

//-----ROUTE Handlers-----//
const createCollection = require("../routeHandlers/collection/createCollection");
const deleteCollection = require("../routeHandlers/collection/deleteCollection");
const getCollections = require("../routeHandlers/collection/getCollections");
const updateCollection = require("../routeHandlers/collection/updateCollection");

//-----ROUTES------//
router.post("/collections", auth, createCollection);
router.delete("/collections/:id", auth, deleteCollection);
router.get("/collections", auth, getCollections);
router.patch("/collections/:id", auth, updateCollection);

module.exports = router;
