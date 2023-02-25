const express = require('express')

const router = express.Router()

const {
    getSection,
    addSection,
    updateSection,
    deleteSection
} = require('../../controllers/adminControllers/sectionControllers')


// CHAINING THE ROUTES
router.route('/').get(getSection).post(addSection)
router.route('/:id').put(updateSection).delete(deleteSection)


module.exports = router