const asyncHandler = require('express-async-handler')
const Section = require('../../models/adminModels/sectionModel')


// @desc    Get all section pictures
// @route   GET /api/section
// @access  Public

const getSection = asyncHandler(async (req, res) => {
    const section = await Section.find()

    res.status(200).json(section)
})


// @desc    Add new section picture
// @route   POST /api/section
// @access  Public

const addSection = asyncHandler(async (req, res) => {
    if (!req.body.img) {
        res.status(400)
        throw new Error('Please upload an image')
    }

    const newCategory = new Section({
        img: req.body.img
    })

    await newCategory.save()
    res.status(201).json(newCategory)
})


// @desc    Update section picture
// @route   PUT /api/section/:id
//access    Private

const updateSection = asyncHandler(async (req, res) => {
    const section = await Section.findById(req.params.id)

    if(!section) {
        res.status(400)
        throw new Error('Nothing has been uploaded yet')
    }

    const updatedCategory = await Section.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedCategory)
})


// @desc    Remove section picture
// @route   DELETE /api/section/:id
// @access  Private

const deleteSection = asyncHandler(async (req, res) => {
    const section = await Section.findById(req.params.id)

    if(!section) {
        res.status(400)
        throw new Error('Nothing to delete')
    }

    await Section.findByIdAndRemove()

    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getSection,
    addSection,
    updateSection,
    deleteSection,
}