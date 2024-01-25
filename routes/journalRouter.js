const express = require("express");
const router = express.Router();
const journalController = require("../controllers/journalController");

router.get("/", journalController.getAll);
router.get("/date/:date/userid/:userid", journalController.getByDateAndUser); //user id tbd
router.post("/create", journalController.create);
router.put("/update", journalController.updateJournal);
router.delete("/delete", journalController.deleteJournal);

module.exports = router;
