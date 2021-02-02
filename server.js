const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const authRoutes = require("./routes/auth-routes");
require("./services/google-strategy")
require("dotenv").config();


const app = express();

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

app.use('/auth', authRoutes)

app.get("/", (req, res) => {
  res.send("jojojo");
});

app.listen(process.env.PORT, () => {
  console.log("listening on port ", process.env.PORT);
});
