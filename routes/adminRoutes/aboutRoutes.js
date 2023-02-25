const express = require('express')

const router = express.Router()

const {
    getAbout,
    addAbout,
    updateAbout,
    deleteAbout
} = require('../../controllers/adminControllers/aboutControllers')


// CHAINING THE ROUTES
router.route('/').get(getAbout).post(addAbout)
router.route('/:id').put(updateAbout).delete(deleteAbout)


module.exports = router