const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys.js");

//order is important here
require("./models/User.js");
require("./services/passport.js");

const appRoutes = require("./routes/authRoutes.js");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(cookieSession({
    //in millisecunds
    maxAge:30*24*60*60*1000,
    //encript key
    keys:[keys.cookieKey]
}))
//passport use cookies
app.use(passport.initialize());
app.use(passport.session());
appRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`app listen to${PORT}`);
