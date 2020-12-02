
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Organiser = mongoose.model("organisers");
const keys = require("../config/keys");
const Student = mongoose.model("students");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use('organiser',
    
    new JwtStrategy(opts, (jwt_payload, done) => {
      // console.log(jwt_payload);
      Organiser.findById(jwt_payload.id)
        .then(organiser => {
          if (organiser){ return done(null, organiser);}
          
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
    
  );
  passport.use('student',
    new JwtStrategy(opts, (jwt_payload, done) => {
      // console.log(jwt_payload);
      Student.findById(jwt_payload.id)
        .then(student => {
          if (student){ return done(null, student);}
          
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
    
};