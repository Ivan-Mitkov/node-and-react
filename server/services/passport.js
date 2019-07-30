const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys.js");

//google api redirect
// http://localhost:5000/auth/google/callback
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  await done(null, user);
  // User.findById(id)
  //   .then(user => {
  //     done(null, user);
  //   })
  //   .catch(err => console.log('deserialize: ',err));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log('profile:',profile)
      const user = await User.findOne({ googleId: profile.id });
      if (user) {
        done(null, user);
      } else {
        const newUser = await new User({ googleId: profile.id }).save();
        done(null,newUser);
      }
    }
    // (accessToken, refreshToken, profile, done) => {
    //   // console.log('profile:',profile)
    //   User.findOne({ googleId: profile.id })
    //     .then(existingUser => {
    //       if (existingUser) {
    //         done(null, existingUser);
    //       } else {
    //         return new User({ googleId: profile.id })
    //           .save()
    //           .then(user => done(null, user));
    //       }
    //     })
    //     .catch(err => console.log('err find one',err));
    // }
  )
);
