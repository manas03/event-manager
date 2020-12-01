const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'organisers'
    },
    name: {
        type: String,
        required: true,
        max: 40
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    organisation: {
        type: String,
    },
    website: {
        type: String,
    },
    post: {
        type: String,
        required: true
    },
    bio: {
        type: String,
    },
    social: {
        facebook: {
            type: String
        },
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        linkedin: {
            type: String
        },
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('organisers', ProfileSchema);