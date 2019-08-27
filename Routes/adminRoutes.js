const express = require("express");
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

const router = express.Router();

// Register admin
// Post request '/admin/register'

router.post("/admin/register", (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email }).then(user => {
    if (user) {
      return res.json({ msg: "Admin already exists" });
    }
  });

  const newAdmin = new Admin({
    name,
    email,
    password
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      newAdmin.password = hash;
      newAdmin
        .save()
        .then(saved => res.json({ admin: newAdmin }))
        .catch(err => console.log(err));
    });
  });
});

// Login admin
// Post request '/admin/login'

router.post("/admin/login", (req, res) => {
  const { email, password } = req.body;

  Admin.findOne({ email }).then(admin => {
    if (!admin) {
      return res.json({ msg: "Admin does not exists" });
    } else {
      bcrypt.compare(password, admin.password).then(isMatched => {
        if (isMatched) {
          const payload = { id: admin.id, name: admin.name };
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

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
