const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
require("./services/google-strategy");
require("dotenv").config();
const session = require("express-session");
const bodyParser = require("body-parser");
const jwtUtils = require('./services/jwt-utils')


const app = express();
app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => console.log("db connected")
);

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

app.get("/", (req, res) => {
  const token=jwtUtils.generateToken(req.user)
  res.send(token);
});

app.listen(process.env.PORT, () => {
  console.log("listening on port ", process.env.PORT);
});
