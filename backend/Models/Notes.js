const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  title: {
    type: String,
    required: [true, "please provide title"],
  },
  description: {
    type: String,
    required: [true, "please provide description"],
  },
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// const notes=
// notes.createIndexes()
module.exports = mongoose.model("Notes", NotesSchema);
