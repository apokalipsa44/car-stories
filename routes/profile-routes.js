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

const jwtAuthenticate= (req, res, next)=>{
  passport.authenticate('jwt', { session: false }),function(req, res) {
        res.send(req.user.profile);
    }
    next()
}

router.get("/", authCheck, (req, res) => {
  console.log('profile')
  res.send(req.user)
  
});

module.exports = router;
