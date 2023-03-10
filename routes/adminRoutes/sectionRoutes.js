const express = require('express')
const router = express.Router()
const Section = require("../../models/adminModels/sectionModel")
const { cloudinary, options } = require("../../middleware/cloudinary")
const upload = require("../../middleware/multer")


// @desc    Add new section's snapshot
// @route   POST /api/section
// @access  Private

router.post("/", upload.single("snapshot"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, options);

    const newSection = new Section({
      snapshot: req.body.snapshot,
      cloudinary_id: result.public_id
    });

    await newSection.save();
    res.status(201).json(newSection);
  } catch (err) {
    console.log(err);
  }
});


// @desc    Get all section's snapshots
// @route   POST /api/section
// @access  Public

router.get("/", async(req, res) => {
    try {
        let newSection = await Section.find();
        res.json(newSection);
    } catch (error) {
        console.log(error)
    }
})


// @desc    Remove section's snapshots
// @route   DELETE /api/section/:id
// @access  Private

router.delete("/:id", async(req, res) => {
    try {
        let newSection = await Section.findById(req.params.id);

        await cloudinary.uploader.destroy(newSection.cloudinary_id)

        await newSection.remove();
        res.json("category and snapshot deleted successfully")
    } catch (error) {
        console.log(error)
    }
});


// @desc    Update section snapshot
// @route   PUT api/section/:id
// @access  Private

router.put("/:id", upload.single("snapshot"), async (req, res) => {
    try {
    let newSection = await Section.findById(req.params.id);

    await cloudinary.uploader.destroy(newSection.cloudinary_id);

    let result;
    if(req.file) {
        result = await cloudinary.uploader.upload(req.file.path); 
    }
    const data = {
        snapshot: result?.secure_url || newSection.snapshot,
        cloudinary_id: result?.public_id || newSection.cloudinary_id
    };
    newSection = await Section.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(newSection);
    } catch (error) {
        console.log(error)
    }
});


// @desc    Get one section snapshot
// @route   GET /api/section/:id
// @access  Public

router.get("/:id", async (req, res) => {
    try {
      let newSection = await Section.findById(req.params.id);
      res.json(newSection);
    } catch (err) {
      console.log(err);
    }
  });
  
  module.exports = router;