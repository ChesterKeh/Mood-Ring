const { model, Schema } = require("mongoose");

const subtaskSchema = new Schema(
  {
    item: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const taskSchema = new Schema(
  {
    title: {
      type: String,
    },
    subtask: [subtaskSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Task", taskSchema);
