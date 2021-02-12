const router = require("express").Router();

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/google");
  } else {
    next();
  }
};



router.get("/", (req, res) => {
  console.log('profile')
  res.send(req.user)
  
});

module.exports = router;
