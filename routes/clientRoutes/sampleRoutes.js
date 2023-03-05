// const router = require('express').Router()
const express = require('express')
const router = express.Router()
const cloudinary  = require('../../middleware/cloudinary'); 
const Sample = require('../../models/clientModels/sampleModel');
const upload = require('../../middleware/multer')

 
router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Create new sample
    const sample = new Sample({
      name: req.body.name,
      image: result.secure_url,
      cloudinary_id: result.public_id,
    });
    // Save sample
    await sample.save();
    res.status(201).json(sample);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let sample = await Sample.find();
    res.json(sample);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Find sample by id
    let sample = await Sample.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(sample.cloudinary_id);
    // Delete sample from MongoDB
    await sample.remove();
    res.json(sample);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let sample = await Sample.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(sample.cloudinary_id);
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }
    const data = {
      name: req.body.name || sample.name,
      image: result?.secure_url || sample.image,
      cloudinary_id: result?.public_id || sample.cloudinary_id,
    };
    sample = await Sample.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(sample);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // Find sample by id
    let sample = await Sample.findById(req.params.id);
    res.json(sample);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;