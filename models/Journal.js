const { model, Schema } = require("mongoose");

const journalSchema = new Schema(
  {
    date: {
      type: Date,
    },
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    mood: {
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

module.exports = model("Journal", journalSchema);
