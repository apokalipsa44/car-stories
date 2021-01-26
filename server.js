const express = require("express");
const mongoose = require("mongoose");
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

app.get("/", (req, res) => {
  res.send("jojojo");
});

app.listen(process.env.PORT, () => {
  console.log("listening on port ", process.env.PORT);
});
