const mongoose = require('mongoose')
const Schema = mongoose.Schema


const SectionSchema = Schema({
    img: {
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
}, { collection: 'Section' })

module.exports = mongoose.model('Section', SectionSchema);