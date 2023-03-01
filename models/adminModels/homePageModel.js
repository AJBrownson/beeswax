const mongoose = require('mongoose')
const Schema = mongoose.Schema


const HomeSchema = Schema({
    category: String,
    img: String,
    cloudinary_id: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
}, { collection: 'Home' })


module.exports = mongoose.model('Home', HomeSchema);