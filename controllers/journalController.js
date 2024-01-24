const Journal = require("../models/Journal");

const getAll = async (req, res) => {
  try {
    const journals = await Journal.find();
    res.status(200).json({ journals });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getByDateAndUser = async (req, res) => {
  try {
      const { date } = req.params;
      const parsedDate = new Date(parseInt(date));
      const startdate = new Date(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate(), 0, 0, 0); //0000HRS
      const enddate = new Date(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate(), 23, 59, 59); //2359HRS
      const journals = await Journal.find({
          "date": {
              "$gte": startdate,
              "$lte": enddate
           }
      });
      res.status(200).json({ journals });
  } catch (error){
      res.status(500).json({ error });
  }
}

const create = async (req, res) => {
  const data = req.body;
  try {
    const journal = await Journal.create(data);
    res.status(200).json({ journal });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateJournal = async (req, res) => {
  const { _id } = req.body;
  try {
      const journal = await Journal.findById(_id);
      journal.title = req.body.title;
      journal.body = req.body.body
      journal.mood = req.body.mood;
      await journal.save();
      res.status(200).json({ journal });
  } catch (error){
      res.status(500).json({ error });
  }
}

const deleteJournal = async (req, res) => {
  const data = req.body;
  try {
      const journal = await Journal.deleteOne(data);
      res.status(200).json({ journal });
  } catch (error){
      res.status(500).json({ error });
  }
};

module.exports = {
  getAll,
  getByDateAndUser,
  create, 
  updateJournal,
  deleteJournal,
};
