const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const students = require("./routes/api/students");
const studentprofile = require("./routes/api/studentprofile");
const organisers = require("./routes/api/organisers");
const events = require("./routes/api/events");
const fests = require("./routes/api/fests");

//const posts = require('./routes/api/posts');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.set("useFindAndModify", false);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/students", students);
app.use("/api/studentprofile", studentprofile);
app.use("/api/organisers", organisers);
app.use("/api/events", events);
app.use("/api/fests", fests);
//app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
