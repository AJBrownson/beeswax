const asyncHandler = require('express-async-handler')
const Guest = require('../../models/clientModels/guestBookModel')


// @desc    Get all guests comments
// @route   GET /api/guestbook
// @access  Private

const getComment = asyncHandler(async (req, res) => {
    const guests = await Guest.find()

    res.status(200).json(guests)
})


// @desc    Get one guest comment
// @route   GET /api/guestbook/:id
// @access  Private

const getOneComment = asyncHandler(async (req, res) => {
    const guests = await Guest.findById()

    res.status(200).json(guests)
})


// @desc    Add new guest comment
// @route   POST /api/guestbook
// @access  Public

const addComment = asyncHandler(async (req, res) => {
    if (!req.body.name && !req.body.comment) {
        res.status(400)
        throw new Error('Please write something')
    }

    const newComment = new Guest({
        name: req.body.name,
        comment: req.body.comment
    })

    await newComment.save()
    res.status(201).json(newComment)
})


// @desc    Update guest comment
// @route   PUT /api/guestbook/:id
//access    Private

const updateComment = asyncHandler(async (req, res) => {
    const guest = await Guest.findById(req.params.id)

    if(!guest) {
        res.status(400)
        throw new Error('Guest comment not found')
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
        throw new Error('No comment to delete')
    }

    await Guest.findByIdAndRemove()

    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getComment,
    getOneComment,
    addComment,
    updateComment,
    deleteComment,
}