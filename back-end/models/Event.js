const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "organisers",
  },
  festuser: {
    type: Schema.Types.ObjectId,
    ref: "fests",
  },
  fest: {
    type: Boolean,
  },
  eventname: {
    type: String,
    required: true,
  },
  eventinfo: {
    type: String,
    required: true,
  },
  eventimage: {
    type: String,
  },
  organisation: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },

  eventwebsite: {
    type: String,
    required: true,
  },

  timeline: {
    RegistrationDeadline: {
      type: Date,
      required: true,
    },
    StartingDate: {
      type: Date,
      required: true,
    },
    StartingTime: {
      type: String,
    },
    EndingDate: {
      type: Date,
      required: true,
    },
    EndingTime: {
      type: String,
    },
    ResultDate: {
      type: Date,
    },
  },
  eventteamsize: {
    max: {
      type: Number,
    },
    min: {
      type: Number,
    },
  },

  eventprizes: [
    {
      position: {
        type: String,
      },
      prizeinfo: {
        type: String,
      },
    },
  ],

  /*sponsorprizes: [
    {
      sponsorprizename: {
        type: String,
      
      },
      sponsorprize: {
        type: String,
      },
      sponsorprizeinfo: {
        type: String,
      },
    },
  ],*/

  eventfaq: [
    {
      question: {
        type: String,
      },
      answer: {
        type: String,
      },
    },
  ],
  eventsponsors: [
    {
      eventsponsorname: {
        type: String,
      },
      eventspoonsorimage: {
        type: String,
      },
    },
  ],
  eventsocial: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    discord: {
      type: String,
    },
  },
  eventcontact: [
    {
      name: {
        type: String,
      },
      phone: {
        type: String,
      },
      email: {
        type: String,
      },
    },
  ],
});
module.exports = Event = mongoose.model("events", EventSchema);
