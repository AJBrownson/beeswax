const asyncHandler = require('express-async-handler')
const { cloudinary, options } = require('../../middleware/cloudinary')
const About = require('../../models/adminModels/aboutModel')


// @desc    Add about info
// @route   POST /api/about
// @access  Private

const addAbout = asyncHandler(async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path, options);
        const newAbout = new About({
            name: req.body.name,
            location: req.body.location,
            bio: req.body.bio,
            images: result.secure_url,
            cloudinary_id: result.public_id,
            images: result.secure_url,
            cloudinary_id: result.public_id,
        });
        await newAbout.save()
        res.status(201).json(newAbout)
    } catch (error) {
        console.log(error)
    }


    // if(
    //     !req.body.name && 
    //     !req.body.bio && 
    //     !req.body.location && 
    //     !req.body.coverImg && 
    //     !req.body.avatarImg) 
    //     {
    // res.status(400)
    // throw new Error('Fill in the fields')
    // }

    // const newAbout = new About({
    //     name: req.body.name,
    //     bio: req.body.bio,
    //     location: req.body.location,
    //     coverImg: req.body.coverImg,
    //     avatarImg: req.body.avatarImg
    // })

    // await newAbout.save()
    // res.status(201).json(newAbout)
})


// @desc    Get about info
// @route   GET /api/about
// @access  Public

const getAbout = asyncHandler(async (req, res) => {
    const about = await About.find()

    res.status(200).json(about)
})



// @desc    Update about info
// @route   PUT /api/about/:id
// @access  Private

const updateAbout = asyncHandler(async (req, res) => {
    const about = await About.findById(req.params.id)

    if(!about) {
        res.status(400)
        throw new Error('Nothing has been added yet')
    }

    const updatedAbout = await About.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedAbout)
})


// @desc    Remove about info
// @route   DELETE /api/about/:id
// @access  Private

const deleteAbout = asyncHandler(async (req, res) => {
    const about = await About.findById(req.params.id)

    if(!about) {
        res.status(400)
        throw new Error('Nothing to delete')
    }

    await About.findOneAndRemove()

    res.status(200).json('Record has been deleted')
})


module.exports = {
    getAbout,
    addAbout,
    updateAbout,
    deleteAbout
}