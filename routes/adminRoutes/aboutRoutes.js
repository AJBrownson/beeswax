const express = require('express')
const router = express.Router()
const About = require("../../models/adminModels/aboutModel")
const { cloudinary, options } = require("../../middleware/cloudinary")
const upload = require("../../middleware/multer")


// @desc    Add about info
// @route   POST /api/about
// @access  Private

router.post("/", upload.single("avatar"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, options);

    const newAbout = new About({
      name: req.body.name,
      location: req.body.location,
      bio: req.body.bio,
      avatar: result.secure_url,
      cloudinary_id: result.public_id
    });

    await newAbout.save();
    res.status(201).json(newAbout);
  } catch (err) {
    console.log(err);
  }
});


// @desc    Get about info
// @route   POST /api/about
// @access  Public

router.get("/", async(req, res) => {
    try {
        let newAbout = await About.find();
        res.json(newAbout);
    } catch (error) {
        console.log(error)
    }
})


// @desc    Remove about info
// @route   DELETE /api/about/:id
// @access  Private

router.delete("/:id", async(req, res) => {
    try {
        let newAbout = await About.findById(req.params.id);

        await cloudinary.uploader.destroy(newAbout.cloudinary_id)

        await newAbout.remove();
        res.json("Details deleted successfully")
    } catch (error) {
        console.log(error)
    }
});


// @desc    Update about info
// @route   PUT api/about/:id
// @access  Private

router.put("/:id", upload.single("avatar"), async (req, res) => {
    try {
    let newAbout = await About.findById(req.params.id);

    await cloudinary.uploader.destroy(newAbout.cloudinary_id);

    let result;
    if(req.file) {
        result = await cloudinary.uploader.upload(req.file.path); 
    }
    const data = {
        name: req.body.name || newAbout.name,
        location: req.body.location || newAbout.location,
        bio: req.body.bio || newAbout.bio,
        avatar: result?.secure_url || newAbout.avatar,
        cloudinary_id: result?.public_id || newAbout.cloudinary_id
    };
    newAbout = await About.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(newAbout);
    } catch (error) {
        console.log(error)
    }
});
  
  module.exports = router;