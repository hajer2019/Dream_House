const express = require("express");
const keys = require("./config/keys");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoutes");
const announcRoute = require("./Routes/announnementRoutes");
const passport = require("passport");
const cors = require("cors");

const app = express();
app.use(cors());
// BodyParser middleware
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/uploads", express.static("uploads"));

// Users route middleware
app.use("/api", userRoute);

// Announc route middleware
app.use("/api", announcRoute);

//passport Midleware
app.use(passport.initialize());

//passport Config
require("./config/passport")(passport);

//Database connexion
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => {
    console.log("mongo db connected");
  })
  .catch(err => console.log(err));

app.listen(keys.port, () => {
  console.log("server ok");
});
