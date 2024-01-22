const User = require("../models/userModels.js");
const jwt = require("jsonwebtoken");

const getAll = async (req, res) => {
  const users = await User.find({});
  res.json({ users });
};

async function createOne(req, res) {
  const data = req.body;
  if (data.password.trim().length < 3) {
    res.status(400).json({ msg: "password too short" });
    return;
  }
  try {
    const user = await User.create(data);
    const token = createJWT(user);

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error });
  }
}
module.exports = {
  getAll,
  createOne,
};
