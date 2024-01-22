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

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const somebody = await User.findOne({ email });

    if (somebody === null) {
      res.status(401).json({ msg: "user not found" });
      return;
    }

    // if (somebody.password !== password) {
    const check = await bcrypt.compare(password, somebody.password);
    if (!check) {
      res.status(401).json({ msg: "wrong password" });
      return;
    }

    const token = createJWT(somebody);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error });
  }
};
module.exports = {
  getAll,
  createOne,
  login,
};
