const router = require("express").Router();
const passport = require("passport");
const generateToken = require('../services/jwt-utils')

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/google");
  } else {
    next();
  }
};

router.get("/", authCheck, (req, res) => {
  const token = generateToken(req.user);
  res.send(token);
  console.log('token',token);
});

module.exports = router;
