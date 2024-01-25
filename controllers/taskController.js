const Task = require("../models/Task");

const getAll = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const create = async (req, res) => {
  const data = req.body;
  try {
    const task = await Task.create(data);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateTask = async (req, res) => {
  const { _id } = req.body;
  try {
    const task = await Task.findById(_id);
    task.title = req.body.title;
    task.subtask = req.body.subtask;
    await task.save();
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteTask = async (req, res) => {
  const data = req.body;
  try {
    const task = await Task.deleteOne(data);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAll,
  create,
  updateTask,
  deleteTask,
};
