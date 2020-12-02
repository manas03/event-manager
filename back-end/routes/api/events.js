const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Event model
const Event = require("../../models/Event");
const Fest = require("../../models/Fest");
// Load organiser model
const Organiser = require("../../models/Organiser");
const event = require("../../validation/event");

const validateEventInput = require("../../validation/event");
const validateFestInput = require("../../validation/fest");

//Test route
router.get("/test", (req, res) => res.json({ msg: "Events works" }));

// @route   Get api/events
// @desc    Get event
// @access  Public
router.get("/", (req, res) => {
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
    .then((event) => res.json(event))
    .catch((err) =>
      res.status(404).json({ nopostfound: "No event found by that ID" })
    );
});

// @route   Post api/events
// @desc    Create event
// @access  Private

router.post(
  "/:id",
  passport.authenticate("organiser", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEventInput(req.body);

    //Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    // Get fields
    const eventFields = {};
    eventFields.user = req.user.id;

    if (req.body.fest) eventFields.fest = req.body.fest;

    if (req.body.eventname) eventFields.eventname = req.body.eventname;
    if (req.body.eventinfo) eventFields.eventinfo = req.body.eventinfo;
    if (req.body.eventwebsite) eventFields.eventwebsite = req.body.eventwebsite;
    if (req.body.venue) eventFields.venue = req.body.venue;
    if (req.body.organisation) eventFields.organisation = req.body.organisation;
    if (req.body.eventimage) eventFields.eventimage = req.body.eventimage;
    // Skills - Spilt into array

    // Social
    eventFields.eventsocial = {};
    if (req.body.youtube) eventFields.eventsocial.youtube = req.body.youtube;
    if (req.body.twitter) eventFields.eventsocial.twitter = req.body.twitter;
    if (req.body.facebook) eventFields.eventsocial.facebook = req.body.facebook;
    if (req.body.linkedin) eventFields.eventsocial.linkedin = req.body.linkedin;
    if (req.body.instagram)
      eventFields.eventsocial.instagram = req.body.instagram;
    eventFields.timeline = {};
    if (req.body.RegistrationDeadline)
      eventFields.timeline.RegistrationDeadline = req.body.RegistrationDeadline;
    if (req.body.StartingDate)
      eventFields.timeline.StartingDate = req.body.StartingDate;
    if (req.body.StartingTime)
      eventFields.timeline.StartingTime = req.body.StartingTime;
    if (req.body.EndingDate)
      eventFields.timeline.EndingDate = req.body.EndingDate;
    if (req.body.EndingTime)
      eventFields.timeline.EndingTime = req.body.EndingTime;
    if (req.body.ResultDate)
      eventFields.timeline.ResultDate = req.body.ResultDate;

    eventFields.eventteamsize = {};
    if (req.body.max) eventFields.eventteamsize.max = req.body.max;
    if (req.body.min) eventFields.eventteamsize.min = req.body.min;

    Event.findOne({ eventname: req.user.eventname }).then((event) => {
      if (event) {
        // Update
        Event.findOneAndUpdate(
          { user: req.user.id },
          { $set: eventFields },
          { new: true }
        ).then((event) => res.json(event));
      } else {
        // Create

        // Check if handle exists

        // Save Profile
        /*   if(eventFields.fest.toString()=="true")
          {
           
        Fest.findOne({festuser:req.user.festuser}).then(fest=>{
        fest.hacks.unshift(eventFields);

             fest.save().then(fest =>res.json(fest) )

     })
          }*/

        new Event(eventFields).save().then((event) => {
          if (event.fest.toString() == "true") {
            Organiser.findOne({ user: req.user.id }).then((organiser) => {
              Fest.findById(req.params.id).then((fest) => {
                if (fest.user.toString() !== req.user.id) {
                  return res
                    .status(401)
                    .json({ notauthorized: "User not authorized" });
                }
                fest.hacks.unshift(event.id);

                fest.save().then((fest) => res.json(fest));
              });
            });
          } else {
            res.json(event);
          }
        });
      }
    });

    /*const newEvent = new Event({
      eventname: req.body.eventname,
      eventinfo: req.body.eventinfo,
      eventimage: req.body.eventimage,
      organisation: req.body.organisation,
      venue: req.body.venue,
      eventwebsite: req.body.eventwebsite,
      organiser: req.body.id,
    });
    newEvent.save().then((event) => res.json(event));*/
  }
);

// @route   Delete api/events/:id
// @desc    Delete event
// @access  Private
router.post(
  "/prizes/:id",
  passport.authenticate("organiser", { session: false }),
  (req, res) => {
    /* const{errors,isValid}=validateEducationInput(req.body);

  if(!isValid){
      return res.status(400).json(errors)
  }*/
    Organiser.findOne({ user: req.user.id }).then((organiser) => {
      Event.findById(req.params.id).then((event) => {
        const newprizes = {
          position: req.body.position,
          prizeinfo: req.body.prizeinfo,
        };
        const newprizes1 = {
          sponsorprizename: req.body.sponsorprizename,
          sponsorprize: req.body.sponsorprize,
          sponsorprizeinfo: req.body.sponsorprizeinfo,
        };
        event.eventprizes.unshift(newprizes);
        event.sponsorprizes.unshift(newprizes1);

        event.save().then((event) => res.json(event));
      });
    });
  }
);
router.post(
  "/faq/:id",
  passport.authenticate("organiser", { session: false }),
  (req, res) => {
    /* const{errors,isValid}=validateEducationInput(req.body);
 
   if(!isValid){
       return res.status(400).json(errors)
   }*/
    Organiser.findOne({ user: req.user.id }).then((organiser) => {
      Event.findById(req.params.id).then((event) => {
        const faqdetails = {
          question: req.body.question,
          answer: req.body.answer,
        };

        event.faq.unshift(faqdetails);

        event.save().then((event) => res.json(event));
      });
    });
  }
);
router.post(
  "/contact/:id",
  passport.authenticate("organiser", { session: false }),
  (req, res) => {
    /* const{errors,isValid}=validateEducationInput(req.body);
 
   if(!isValid){
       return res.status(400).json(errors)
   }*/
    Organiser.findOne({ user: req.user.id }).then((organiser) => {
      Event.findById(req.params.id).then((event) => {
        const contact = {
          name: req.body.name,
          phone: req.body.phone,
          email: req.body.email,
        };

        event.eventcontact.unshift(contact);

        event.save().then((event) => res.json(event));
      });
    });
  }
);
router.post(
  "/sponsor/:id",
  passport.authenticate("organiser", { session: false }),
  (req, res) => {
    /* const{errors,isValid}=validateEducationInput(req.body);
 
   if(!isValid){
       return res.status(400).json(errors)
   }*/
    Organiser.findOne({ user: req.user.id }).then((organiser) => {
      Event.findById(req.params.id).then((event) => {
        const sponsors = {
          eventsponsorname: req.body.eventsponsorname,
          eventsponsorimage: req.body.eventsponsorimage,
        };

        event.eventsponsors.unshift(sponsors);

        event.save().then((event) => res.json(event));
      });
    });
  }
);

router.delete(
  "/:id",
  passport.authenticate("organiser", { session: false }),
  (req, res) => {
    Organiser.findOne({ user: req.user.id }).then((organiser) => {
      Event.findById(req.params.id)
        .then((event) => {
          //Check for owner
          if (event.user.toString() !== req.user.id) {
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
    });
  }
);
module.exports = router;
