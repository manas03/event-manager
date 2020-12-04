const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
//const dh=require("../../config/passport")
//Load user model
const Organiser = require("../../models/Organiser");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

router.get("/test", (req, res) => res.json({ msg: "organisers works" }));

// @route   GET api/organisers/register
// @desc    Register organiser
// @access  Public organiser
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Organiser.findOne({ email: req.body.email }).then((organiser) => {
    if (organiser) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", // Size
        r: "pg", // Rating
        d: "mm", // Default
      });

      const newOrganiser = new Organiser({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password,
        organisation: req.body.organisation,
        post: req.body.post,
        website: req.body.website,

        dateofbirth: req.body.dateofbirth,
        bio: req.body.bio,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newOrganiser.password, salt, (err, hash) => {
          if (err) throw err;
          newOrganiser.password = hash;
          newOrganiser
            .save()
            .then((organiser) => res.json(organiser))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route   Get api/organisers/login
// @desc    login organiser (return token)
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //Find the user by email
  Organiser.findOne({ email }).then((organiser) => {
    if (!organiser) {
      errors.email = "organiser not found";
      return res.status(404).json(errors);
    }

    //check password
    bcrypt.compare(password, organiser.password).then((isMatch) => {
      if (isMatch) {
        //organiser matched
        const payload = {
          id: organiser.id,
          name: organiser.name,
          avatar: organiser.avatar,
        };

        //sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   Get api/organisers/current
// @desc    Return current organiser
// @access  Private
router.get(
  "/current",
  passport.authenticate("organiser", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });
  }
);

module.exports = router;
