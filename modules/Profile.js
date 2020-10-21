const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String,
        require: true
    },
    skills: {
        type: [String], //Array of strings
        required: true
    },
    bio: {
        type: String
    },
    github_username: {
        type: String
    },
    experience: [
        {
           title: {
               type: String,
               required: true
           },
           company: {
               type: String,
               required: true
           },
           location: {
               type: String,
           },
           from: {
               type: Date,
               required: true
           },
           to: {
               type: Date,               
           },
           current: {
               type: Boolean,
               defaule: false
           },
           description: {
               type: String
           }
        }
    ],
    education: [
        {
            school: {
                type: String,
                required: true
            },
            degree: {
                type: String,
                required: true
            },
            fieldofstudy: {
                type: String,
                required: true
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            }
        }
    ],
    social: {
        youtube: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        },
        twitter: {
            type: String
        }
    }
    
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);