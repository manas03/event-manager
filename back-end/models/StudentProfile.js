const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "students",
  },
  handle: {
    type: String,
    required: true,
    max: 40,
  },
  institute: {
    type: String,
  },
  gender: {
    type: String,
    max: 40,
  },
  phoneno: {
    type: Number,
  },
  dateofbirth: {
    type: Date,
  },
  profilephoto: {
    type: String,
  },
  resume: {
    type: String,
  },
  skills: {
    type: [String],
    required: true,
  },
  githubusername: {
    type: String,
  },

  website: {
    type: String,
  },

  bio: {
    type: String,
  },
  experience: [
    {
      title: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      location: {
        type: String,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],
  education: [
    {
      school: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
        required: true,
      },
      fieldofstudy: {
        type: String,
        required: true,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],
  social: {
    facebook: {
      type: String,
    },
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
    discord: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = StudentProfile = mongoose.model(
  "studentprofile",
  StudentProfileSchema
);
