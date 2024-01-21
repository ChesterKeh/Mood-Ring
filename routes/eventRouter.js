const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

router.get("/", eventController.getAll);
router.post("/create", eventController.createOne);

module.exports = router;