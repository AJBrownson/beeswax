const mongoose = require('mongoose')
const Schema = mongoose.Schema


const SectionSchema = Schema({
    snapshot: String,
    cloudinary_id: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
}, { collection: 'Section' })

module.exports = mongoose.model('Section', SectionSchema);