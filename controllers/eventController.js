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
    try {
        const { date } = req.params;
        const parsedDate = new Date(parseInt(date));
        const startdate = new Date(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate(), 0, 0, 0); //0000HRS
        const enddate = new Date(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate(), 23, 59, 59); //2359HRS
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

const createEvent = async (req, res) => {
    const data = req.body;
    try {
        const event = await Event.create(data);
        res.status(200).json({ event });
    } catch (error){
        res.status(500).json({ error });
    }
};

const updateEvent = async (req, res) => {
    const { _id } = req.body;
    try {
        const event = await Event.findById(_id);
        event.eventname = req.body.eventname;
        event.description = req.body.description;
        event.calendarday = req.body.calendarday;
        await event.save();
        res.status(200).json({ event });
    } catch (error){
        res.status(500).json({ error });
    }
}

const deleteEvent = async (req, res) => {
    const data = req.body;
    try {
        const event = await Event.deleteOne(data);
        res.status(200).json({ event });
    } catch (error){
        res.status(500).json({ error });
    }
};

module.exports = {
    getAll,
    getByDateAndUser,
    createEvent,
    updateEvent,
    deleteEvent
}