const { model, Schema } = require("mongoose");

const eventSchema = new Schema(
    {
        calendarday: {
            type: Date,
        },
        eventname:{
            type: String,
        },
        description:{
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = model("Event", eventSchema);