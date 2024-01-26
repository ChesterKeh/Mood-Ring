const express = require("express");
const router = express.Router();
const journalController = require("../controllers/journalController");

router.get("/", journalController.getAll);
router.get("/userid/:userid", journalController.getByUser);
router.get("/:year/:month/userid/:userid", journalController.getByMonthAndUser);
router.get("/date/:date/userid/:userid", journalController.getByDateAndUser); //user id tbd
router.get("/userid/:userid", journalController.getByMonthAndUser);
router.post("/create", journalController.create);
router.put("/update", journalController.updateJournal);
router.delete("/delete", journalController.deleteJournal);

module.exports = router;
