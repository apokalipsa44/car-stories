const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../model/user-schema");
require("dotenv").config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (error, user) => {
    done(error, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CONSUMER_KEY,
      clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, done) {
      let user = await User.findOne({
        googleId: profile.id,
      });
      if (!user) {
        user = new User({
          googleId: profile.id,
          userName: profile.displayName,
        });
        await user.save();
        console.log("new user saved", user);
      }

      done(null, user);
    }
  )
);
