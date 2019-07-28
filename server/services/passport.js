const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys.js");

//google api redirect
// http://localhost:5000/auth/google/callback

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(accessToken);
      console.log("profile", profile);
    //   User.findOrCreate({ googleId: profile.id }, function(err, user) {
    //     return done(err, user);
    //   });
    }
  )
);
