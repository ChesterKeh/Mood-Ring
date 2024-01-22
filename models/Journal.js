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
  },
  {
    timestamps: true,
  }
);

module.exports = model("Journal", journalSchema);
