const passport = require('passport');
const keys = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.use(
    new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({googleId: profile.id});
            if (existingUser) {
                //user - get that user
                return done(null, existingUser);
            }
            //saves new user and preforms user - user get user
            const user = await new User({googleId: profile.id}).save();
            done(null, user);
        }));

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser(((id, done) => {
    User.findById(id).then(user => {
        done(null, user)
    })
}));
