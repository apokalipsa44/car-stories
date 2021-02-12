const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String, 
  userName: String,
  body: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
