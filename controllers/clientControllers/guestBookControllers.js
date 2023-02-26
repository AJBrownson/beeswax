const asyncHandler = require('express-async-handler')
const Guest = require('../../models/clientModels/guestBookModel')


// @desc    Get all guest comments
// @route   GET /api/guestbook
// @access  Public

const getAllComments = asyncHandler(async (req, res) => {
    const guest = await Guest.find()

    res.status(200).json(guest)
})


// @desc    Add new guest comment
// @route   POST /api/guestbook
// @access  Public

const addComment = asyncHandler(async (req, res) => {
    if(!req.body.name && !req.body.comment) {
        res.status(400)
        throw new Error('Write something')
    }

    const newComment = new Guest({
        name: req.body.name,
        comment: req.body.comment
    })

    await newComment.save()
    res.status(201).json(newComment)
})


// @desc    Update guests comments
// @route   PUT /api/guestbook/:id
// @access  Private

const updateComment = asyncHandler(async (req, res) => {
    const guest = await Guest.findById(req.params.id)

    if(!guest) {
        res.status(400)
        throw new Error('No comment has been added yet')
    }

    const updatedComment = await Guest.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedComment)
})


// @desc    Remove guest comment
// @route   DELETE /api/guestbook/:id
// @access  Private

const deleteComment = asyncHandler(async (req, res) => {
    const guest = await Guest.findById(req.params.id)

    if(!guest) {
        res.status(400)
        throw new Error('Nothing to delete')
    }

    await Guest.findByIdAndRemove()

    res.status(200).json('Record has been deleted')
})


module.exports = {
    getAllComments,
    addComment,
    updateComment,
    deleteComment
}