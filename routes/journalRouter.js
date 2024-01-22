const express = require("express");
const router = express.Router();
const journalController = require("../controllers/journalController");

router.get("/", journalController.getAll);
router.post("/create", journalController.create);

module.exports = router;
