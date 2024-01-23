var express = require("express");
var router = express.Router();
const subtaskController = require("../controllers/subtaskController");

router.post("/api/task/:id/subtask", subtaskController.create);

module.exports = router;
