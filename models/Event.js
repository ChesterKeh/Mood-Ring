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
        },
        userid:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("Event", eventSchema);