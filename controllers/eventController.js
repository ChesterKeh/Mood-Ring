const Event = require("../models/Event");

const getAll = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json({ event });
    } catch (error){
        res.status(500).json({ error });
    }
};

const createOne = async (req, res) => {
    const data = req.body;
    try{
        const event = await Event.create(data);
        res.status(200).json({ event });
    } catch (error){
        res.status(500).json({ error });
    }
};

module.exports = {
    getAll,
    createOne,
}