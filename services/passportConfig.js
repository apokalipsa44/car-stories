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
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({googleId: profile.id}).then((existingUser) => {
            if (existingUser) {
                //user - get that user
                done(null, existingUser);

            } else {
                //saves new user and preforms user - user get user
                new User({googleId: profile.id}).save()
                    .then(user => done(null, user));
            }
        })
    }));

