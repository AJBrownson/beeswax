const mongoose = require('mongoose')
const Schema = mongoose.Schema


const AboutSchema = Schema({
    name: String,
    bio: String,
    location: String,
    coverImg: String,
    cloudinary_id : String,
    avatarImg: String,
    cloudinary_id: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
}, { collection: 'About' })

module.exports = mongoose.model('About', AboutSchema);