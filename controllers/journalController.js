const Journal = require("../models/Journal");

const getAll = async (req, res) => {
  try {
    const journals = await Journal.find();
    res.status(200).json({ journals });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const create = async (req, res) => {
  const data = req.body;
  try {
    const journal = await Journal.create(data);
    res.status(200).json({ journal });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAll,
  create,
};
