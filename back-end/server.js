const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //DB config
// const db = require("./config/keys").mongoURI;

//connect to mongodb
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB works"))
  .catch((err) => console.log(err));

//app.get('/',(req,res)=> res.send('Hello'));

//passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// //Use routes
// app.use("/api/users", users);
// app.use("/api/profile", profile);
// app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
