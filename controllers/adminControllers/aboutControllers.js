const asyncHandler = require('express-async-handler')
const About = require('../../models/adminModels/aboutModel')

// @desc    Get about info
// @route   GET /api/about
// @access  Public

const getAbout = asyncHandler(async (req, res) => {
    const aboutInfo = await About.find()

    res.status(200).json(aboutInfo)
})


// @desc    Add new about info
// @route   POST /api/about
// @access  Private

const addAbout = asyncHandler(async (req, res) => {
    if (!req.body.name && !req.body.bio && !req.body.location && !req.body.coverImg && !req.body.avatarImg) {
        res.status(400)
        throw new Error('Write something interesting')
    }

    const newAbout = new About({
        name: req.body.name,
        bio: req.body.bio,
        location: req.body.location,
        coverImg: req.body.coverImg,
        avatarImg: req.body.avatarImg
    })

    await newAbout.save()
    res.status(201).json(newAbout)
})


const updateAbout = asyncHandler(async (req, res) => {
    const about = await About.findById(req.params.id)

    if(!about) {
        res.status(400)
        throw new Error('Nothing has been written yet')
    }

    const updatedAbout = await About.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedAbout)
})


// @desc    Remove abaout info
// @route   DELETE /api/about/:id
// @access  Private

const deleteAbout = asyncHandler(async (req, res) => {
    const about = await About.findById(req.params.id)

    if(!about) {
        res.status(400)
        throw new Error('Nothing has been written yet')
    }

    await About.findByIdAndRemove()

    res.status(200).json({ id: req.params.id })
})


module.exports = [
    getAbout,
    addAbout,
    updateAbout,
    deleteAbout,
]