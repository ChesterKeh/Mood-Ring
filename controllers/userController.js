const User = require("../models/userModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const getAll = async (req, res) => {
  try {
    const tasks = await User.find();
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error });
  }
};

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

const create = async (req, res) => {
  const data = req.body;

  try {
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    if (data.password.trim().length < 3) {
      const error = { msg: "Server password too short" };
      return res.status(400).json(error);
    }

    const user = await User.create(data);
    const token = createJWT(user);

    res.status(201).json({ token, user });
  } catch (error) {
    if (error.code === 11000 || error.code === 11001) {
      return res.status(400).json({ error: "Email already in use" });
    }

    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const somebody = await User.findOne({ email });

    if (somebody === null) {
      res.status(401).json({ msg: "user not found" });
      return;
    }

    const check = await bcrypt.compare(password, somebody.password);
    if (!check) {
      res.status(401).json({ msg: "wrong password" });
      return;
    }

    const token = createJWT(somebody);
    res.json({ token, somebody });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getpublicusers = async (req, res) => {
  try {
    const publicUsers = await User.find({ isPublic: true });
    res.status(200).json(publicUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUser = async (req, res) => {
  try {
    const { _id } = req.body;
    const user = await User.findOne({ _id: _id });
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addFriend = async (req, res) => {
  const { userId, friendId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User does not exist" });
    }
    user.linked_user_id.push(friendId);
    user.save();
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const removeFriend = async (req, res) => {
  const { userId, friendId } = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, {
      $pull: { linked_user_id: friendId },
    });
    const newUser = await User.findById(userId);
    res.status(200).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAll,
  create,
  login,
  getpublicusers,
  getUser,
  addFriend,
  removeFriend,
};
