const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
//Load student model
const Student = require("../../models/Student");
//const passport2 = require("../../config/passport2");

router.get("/test", (req, res) => res.json({ msg: "student works" }));

// @route   GET api/students/register
// @desc    Register student
// @access  Public organiser
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Student.findOne({ email: req.body.email }).then((student) => {
    if (student) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", // Size
        r: "pg", // Rating
        d: "mm", // Default
      });

      const newStudent = new Student({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newStudent.password, salt, (err, hash) => {
          if (err) throw err;
          newStudent.password = hash;
          newStudent
            .save()
            .then((student) => res.json(student))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route   Get api/students/login
// @desc    login students (return token)
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //Find the student by email
  Student.findOne({ email }).then((student) => {
    if (!student) {
      errors.email = "student not found";
      return res.status(404).json(errors);
    }

    //check password
    bcrypt.compare(password, student.password).then((isMatch) => {
      if (isMatch) {
        //student matched
        const payload = {
          id: student.id,
          name: student.name,
          avatar: student.avatar,
        };

        //sign token
        jwt.sign(payload, keys.secretOrKey, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token,
            id: payload.name,
          });
        });
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
  passport.authenticate("student", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });
  }
);

module.exports = router;
