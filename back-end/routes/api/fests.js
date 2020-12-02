const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Fest= require('../../models/Fest')
// Load organiser model
const Organiser = require('../../models/Organiser')
const Event=require("../../models/Event")
const validateFestInput = require("../../validation/fest");
router.get("/", (req, res) => {
  Fest.find()
    .sort({ date: -1 })
    .then((fests) => res.json(fests))
    .catch(err => res.status(404).json({ noeventsfound: "No events found" }));
});

router.post("/fest",
passport.authenticate("organiser",{session:false}),
(req,res)=>{
  const { errors, isValid } = validateFestInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);

  }
  
    const newFest = new Fest({
      festname: req.body.festname,
      festtagline: req.body.festtagline,
      institute: req.body.institute,
      website: req.body.website,
      organiser: req.user.id,
    });
    newFest.save().then((fest) => res.json(fest));

}
)
/*router.post(
  '/fest/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
   Organiser.findOne({ user: req.user.id }).then(organiser => {
      Fest.findById(req.params.id)
        .then(fest => {
          Event.
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: 'User already liked this post' });
          }

          // Add user id to likes array
          fest.hacks.unshift({ event:event.id });

          fest.save().then(fest => res.json(fest));
        })
        .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
    });
  }
);*/

module.exports=router