const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");

require("dotenv").config();

const generateToken = (user) => {
  console.log('user: ', user);

  return "Bearer " + jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
};

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = "yoursite.net";
passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);

// const jwtAuthenticate= (req, res, next)=>{
//   passport.authenticate('jwt', { session: false }),function(req, res) {
//         res.send(req.user.profile);
//     }
//     next()
// }

exports.generateToken = generateToken;
