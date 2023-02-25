const express = require('express')

const router = express.Router()

const {
    getAllCategories,
    addCategory,
    updateCategory,
    deleteCategory
} = require('../../controllers/adminControllers/homePageControllers')


// CHAINING THE ROUTES
router.route('/').get(getAllCategories).post(addCategory)
router.route('/:id').put(updateCategory).delete(deleteCategory)


module.exports = router