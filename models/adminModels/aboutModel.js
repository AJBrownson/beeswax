const mongoose = require('mongoose')
const Schema = mongoose.Schema


const AboutSchema = Schema({
    name: String,
    bio: String,
    location: String,
    coverImg: {
        data: Buffer,
        contentType: String
    },
    avatarImg: {
        data: Buffer,
        contentType: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: { 
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('About', AboutSchema);