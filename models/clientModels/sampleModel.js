const mongoose = require('mongoose')
const Schema = mongoose.Schema


const SampleSchema = Schema({
    name: String,
    image: String,
    cloudinary_id: String
}, { collection: 'Sample' })


module.exports = mongoose.model('Sample', SampleSchema);