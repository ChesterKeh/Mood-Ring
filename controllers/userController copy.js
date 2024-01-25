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
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

const create = async (req, res) => {
  const data = req.body;

  if (data.password.trim().length < 3) {
    const error = { msg: "server password too short" };
    res.status(400).json(error);
    return;
  }

  try {
    const user = await User.create(data);
    const token = createJWT(user);

    res.status(201).json({ token, user });
    return token;
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getpublicusers = async (req, res) => {
  try {
    const publicUsers = await User.find({ isPublic: true }, "name email");
    res.status(200).json(publicUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addFriend = async (req, res) => {
  const { userId, friendId } = req.body;

  try {
    // Check if the user with userId exists
    const userExists = await User.exists({ _id: userId });
    if (!userExists) {
      return res.status(404).json({ error: "User does not exist" });
    }
    // If user exists, proceed to add friend
    const variable = await User.findByIdAndUpdate(userId, {
      $push: { linked_user_id: friendId },
    });
    console.log(variable);
    res.json(variable);
    res.status(200).json({ message: "Friend added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const removeFriend = async (req, res) => {
  const { userId, friendId } = req.body;

  try {
    await User.findByIdAndUpdate(userId, {
      $pull: { linked_user_id: friendId },
    });

    res.status(200).json({ message: "Friend removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const somebody = await User.findOne({ email });

    if (!somebody) {
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

module.exports = {
  getAll,
  create,
  login,
  getpublicusers,
  addFriend,
  removeFriend,
};
