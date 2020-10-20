const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Event model
const Event = require('../../models/Event');

// Load organiser model
const Organiser = require('../../models/Organiser');

Validation
const validateEventInput = require("../../validation/event");

//Test route
router.get("/test", (req, res) => res.json({ msg: "Events works" }));

// @route   Get api/events
// @desc    Get event
// @access  Public
router.get("/", (req, res) => {
  const errors = {};
  Event.find()
    .sort({ date: -1 })
    .then((events) => res.json(events))
    .catch((err) => res.status(404).json({ noeventsfound: "No events found" }));
});

// @route   Get api/events/:id
// @desc    Get event by id
// @access  Public
router.get("/:id", (req, res) => {
  const errors = {};
  Event.findById(req.params.id)
    .then((events) => res.json(events))
    .catch((err) =>
      res.status(404).json({ nopostfound: "No event found by that ID" })
    );
});

// @route   Post api/events
// @desc    Create event
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEventInput(req.body);

    //Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newEvent = new Event({
      eventname: req.body.eventname,
      eventinfo: req.body.eventinfo,
      eventimage: req.body.eventimage,
      organisation: req.body.organisation,
      venue: req.body.venue,
      eventwebsite: req.body.eventwebsite,
      organiser: req.body.id,
    });
    newEvent.save().then((event) => res.json(event));
  }
);

// @route   Delete api/events/:id
// @desc    Delete event
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
      Event.findById(req.params.id)
        .then((event) => {
          //Check for owner
          if (event.organiser.toString() !== req.organiser.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }
          //Delete
          event.remove().then(() => res.json({ success: true }));
        })
        .catch((err) =>
          res.status(404).json({ eventnotfound: "event not found" })
        );
  }
);