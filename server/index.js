const express=require("express")
require("./services/passport.js");
const appRoutes=require('./routes/authRoutes.js');

const app=express();
appRoutes(app)


const PORT =process.env.PORT||5000;
app.listen(PORT)
console.log(`app listen to${PORT}`)