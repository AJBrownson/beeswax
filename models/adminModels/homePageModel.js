const mongoose = require('mongoose')
const Schema = mongoose.Schema


const HomeSchema = Schema({
    category: String,
    image: {
        type: String
    },
    cloudinary_id: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
}, { collection: 'Home' })


module.exports = mongoose.model('Home', HomeSchema);