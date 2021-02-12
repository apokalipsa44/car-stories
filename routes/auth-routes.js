const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
require('dotenv').config()

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

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/loginson" }),
  function (req, res) {
    req.login(req.user, { session: false }, async (error) => {
      console.log('user: ', req.user);

      if (error) return next(error);

      const body = { _id: req.user._id, userName: req.user.userName };
      const token = jwt.sign({ user: body }, process.env.JWT_SECRET);

      console.log("redirected");
      // const token = jwtUtils.generateToken(req.user);
      res.setHeader("authentication", token);
      console.log('token: ', token);
      res.json({ jwt: token, user: body, error: error });
      res.redirect("/");
      // return res.json({ token });
    });
  }
);

module.exports = router;

// router.post("/login", async (req, res, next) => {
//   passport.authenticate("login", async (err, user, info) => {
//     try {
//       if (err || !user) {
//         const error = new Error("An error occurred.");

//         return next(error);
//       }

//       req.login(user, { session: false }, async (error) => {
//         if (error) return next(error);

//         const body = { _id: user._id, email: user.email };
//         const token = jwt.sign({ user: body }, "TOP_SECRET");

//         return res.json({ token });
//       });
//     } catch (error) {
//       return next(error);
//     }
//   })(req, res, next);
// });
