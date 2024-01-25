const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// router.get("/", userController.create);

router.get("/", userController.getAll);
router.post("/create", userController.create);
router.post("/login", userController.login);

router.get("/getpublicusers", userController.getpublicusers);

router.post("/addfriend", userController.addFriend);
router.post("/removefriend", userController.removeFriend);

module.exports = router;
