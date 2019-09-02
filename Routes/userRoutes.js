const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

const router = express.Router();

// Register user
// Post request '/user/register'

router.post("/user/register", (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email }).then(user => {
    if (user) {
      return res.json({ msg: "user already exists" });
    }
  });

  const newUser = new User({
    name,
    email,
    password
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      newUser.password = hash;
      newUser
        .save()
        .then(saved => res.json({ user: newUser }))
        .catch(err => console.log(err));
    });
  });
});

// Login user
// Post request '/user/login'

router.post("/user/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.json({ msg: "user does not exists" });
    } else {
      bcrypt.compare(password, user.password).then(isMatched => {
        if (isMatched) {
          const payload = { id: user.id, name: user.name };
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 68594752 },
            (err, token) => {
              if (err) throw err;
              res.json({ token: "Bearer " + token });
            }
          );
        } else {
          return res.json({ msg: "password incorrect" });
        }
      });
    }
  });
});

// Delete user
// Delete request '/user/:id'

router.delete("/user/:id", (req, res) => {
  User.findOneAndDelete(req.params.id)
    .then(data => res.send({ success: true }))
    .catch(err => res.send({ success: false }));
});
router.get("/users", (req, res) => {
  User.find()
    .then(annonces => res.json(annonces))
    .catch(err => res.send("cannot get"));
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
