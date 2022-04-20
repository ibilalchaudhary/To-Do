const mongoose = require("mongoose");

const TodoModel = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please enter this field"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", TodoModel);
