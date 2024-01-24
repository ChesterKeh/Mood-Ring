const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.getAll);
router.post("/create", taskController.create);
router.put("/update", taskController.updateTask);
router.delete("/delete", taskController.deleteTask);

module.exports = router;
