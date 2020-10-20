const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "organisers",
  },
  eventname: {
    type: String,
    required: true,
    max: 30,
    min: 10,
  },
  eventinfo: {
    type: String,
    required: true,
  },
  eventimage: {
    type: String,
  },
  organization: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },

  eventwebsite: {
    type: String,
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
      required: true,
    },
    EndingDate: {
      type: Date,
      required: true,
    },
    EndingTime: {
      type: String
    },
    ResultDate: {
      type: Date,
    },
  },

  eventprizes: [
    {
      position: {
        type: String,
        required: true,
      },
      prizeinfo: {
        type: String,
        required: true,
      },
    },
  ],
  sponsorprizes: [
    {
      sponsorprizename: {
        type: String,
        required: true,
      },
      sponsorprize: {
        type: String,
        required: true,
      },
      sponsorprizeinfo: {
        type: String,
      },
    },
  ],

  eventteamsize: {
    max: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      required: true,
    },
  },

  eventfaq: [
    {
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
  eventsponsors: [
    {
      eventsponsorname: {
        type: String,
        required: true,
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
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
      },
    },
  ],
});
module.exports = User = mongoose.model("users", EventSchema);
