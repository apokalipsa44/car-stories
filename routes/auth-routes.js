const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.get("/login", (req, res) => {
  res.send("login");
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.send("logout");
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"],
    session: false,
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    req.login(req.user, { session: false }, async (error) => {
      console.log("user: ", req.user);

      if (error) return next(error);

      const body = { _id: req.user._id, userName: req.user.userName };
      const token = jwt.sign({ user: body }, process.env.JWT_SECRET);

      console.log("redirected");
       res.json({ jwt:'Bearer: '+ token, user: body, error: error });
    });
  }
);

module.exports = router;


