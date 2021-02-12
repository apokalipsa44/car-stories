const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String, 
  userName: String,
  body: String,
});

const User = mongoose.model("User", userSchema);
// const findOrCreate=()=>{
// let user = await User.findOne({
//         googleId: profile.id,
//       });
//       if (!user) {
//         user = new User({
//           googleId: profile.id,
//           userName: profile.displayName,
//         });
//         await user.save();
//         console.log("new user saved", user);
//       }

//        user;
// }


module.exports = User;
