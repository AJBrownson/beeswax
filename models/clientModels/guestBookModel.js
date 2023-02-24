const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GuestSchema = Schema[{
    name: String,
    comment: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
}]

module.exports = mongoose.model('Guest', GuestSchema)