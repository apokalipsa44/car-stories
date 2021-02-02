const router = require("express").Router();
const passport = require("passport");

router.get("/login", (req, res) => {
  res.send("login");
});

router.get("/logout", (req, res) => {
  res.send("logout");
});

router.get('/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] , 
  session: false}));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/loginson' }),
  function(req, res) {
    console.log('redirected')
    res.redirect('/');
  });

module.exports = router;
