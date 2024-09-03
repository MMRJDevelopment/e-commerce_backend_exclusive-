const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 4,
    max: 125,
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
    max: 130,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  phoneNumber: { type: Number },
  address: { type: String },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("UserList", userSchema);
