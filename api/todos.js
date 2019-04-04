const express = require("express");
const router = express.Router();
const todos = require("../static/Todos");
// const uuid = require("uuid");

// Get All Todos
router.get("/", (req, res) => res.json(todos));

module.exports = router;