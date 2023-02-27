const asyncHandler = require('express-async-handler')
const Home = require('../../models/adminModels/homePageModel')


// @desc    Get all home categories and pictures
// @route   GET /api/home
// @access  Public

const getAllCategories = asyncHandler(async (req, res) => {
    const home = await Home.find()

    res.status(200).json(home)
})


// @desc    Add new category and picture
// @route   POST /api/home
// @access  Public

const addCategory = asyncHandler(async (req, res) => {
    if (!req.body.category && !req.body.img) {
        res.status(400)
        throw new Error('Please enter something')
    }

    const newCategory = new Home({
        category: req.body.category,
        img: req.body.img
    })

    await newCategory.save()
    res.status(201).json(newCategory)
})


// @desc    Update category and picture
// @route   PUT /api/home/:id
//access    Private

const updateCategory = asyncHandler(async (req, res) => {
    const home = await Home.findById(req.params.id)

    if(!home) {
        res.status(400)
        throw new Error('Nothing has been added yet')
    }

    const updatedCategory = await Home.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedCategory)
})


// @desc    Remove category and picture
// @route   DELETE /api/home/:id
// @access  Private

const deleteCategory = asyncHandler(async (req, res) => {
    const home = await Home.findById(req.params.id)

    if(!home) {
        res.status(400)
        throw new Error('Nothing to delete')
    }

    await Home.findOneAndRemove()

    res.status(200).json('Record has been deleted')
})


module.exports = {
    getAllCategories,
    addCategory,
    updateCategory,
    deleteCategory,
}