const Event = require("../models/Event");

const getAll = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json({ events });
    } catch (error){
        res.status(500).json({ error });
    }
};

const getByDateAndUser = async (req, res) => {
    try{
        const { date } = req.params;
        const parsedDate = new Date(parseInt(date));
        const startdate = new Date(parsedDate.getFullYear(), parsedDate.getMonth(), 1);
        const enddate = new Date(parsedDate.getFullYear(), parsedDate.getMonth() + 1, 0);
        const events = await Event.find({
            "calendarday": {
                "$gte": startdate,
                "$lte": enddate
             }
        });
        res.status(200).json({ events });
    } catch (error){
        res.status(500).json({ error });
    }
}

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
    getByDateAndUser,
    createOne,
}