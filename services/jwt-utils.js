const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const User = require('../model/user-schema')

require("dotenv").config();

const generateToken = (user) => {
  console.log('user: ', user);

  return "Bearer " + jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
};

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload._id }, function (err, user) {
      if (err) {
        console.log('err: ', err);
        return done(err, false);

      }
      if (user) {
        console.log('user: ', user);
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);


