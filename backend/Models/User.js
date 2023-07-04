const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide name"],
  },
  email: {
    type: String,
    required: [true, "please provide email"],
    minlength: 15,
    maxlength: 20,
    unique: true,
  },
  passoword: {
    type: String,
    required: [true, "please provide passoword"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const user = mongoose.model("Users", UsersSchema);
user.createIndexes();
module.exports = user;
