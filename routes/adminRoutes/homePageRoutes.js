const express = require('express')
const router = express.Router()
const Home = require("../../models/adminModels/homePageModel")
const { cloudinary, options } = require("../../middleware/cloudinary")
const upload = require("../../middleware/multer")


// @desc    Add new category and snapshot
// @route   POST /api/home
// @access  Private

router.post("/", upload.single("snapshot"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, options);

    const newCategory = new Home({
      category: req.body.category,
      snapshot: req.body.snapshot,
      cloudinary_id: result.public_id
    });

    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    console.log(err);
  }
});


// @desc    Get all home categories and snapshots
// @route   POST /api/about
// @access  Public

router.get("/", async(req, res) => {
    try {
        let newCategory = await Home.find();
        res.json(newCategory);
    } catch (error) {
        console.log(error)
    }
})


// @desc    Remove category and snapshot
// @route   DELETE /api/about/:id
// @access  Private

router.delete("/:id", async(req, res) => {
    try {
        let newCategory = await Home.findById(req.params.id);

        await cloudinary.uploader.destroy(newCategory.cloudinary_id)

        await newCategory.remove();
        res.json("category and snapshot deleted successfully")
    } catch (error) {
        console.log(error)
    }
});


// @desc    Update about info
// @route   PUT api/about/:id
// @access  Private

router.put("/:id", upload.single("snapshot"), async (req, res) => {
    try {
    let newCategory = await Home.findById(req.params.id);

    await cloudinary.uploader.destroy(newCategory.cloudinary_id);

    let result;
    if(req.file) {
        result = await cloudinary.uploader.upload(req.file.path); 
    }
    const data = {
        category: req.body.category || newCategory.category,
        snapshot: result?.secure_url || newCategory.snapshot,
        cloudinary_id: result?.public_id || newCategory.cloudinary_id
    };
    newCategory = await Home.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(newCategory);
    } catch (error) {
        console.log(error)
    }
});


// @desc    Get one home category and snapshot
// @route   GET /api/about
// @access  Public

router.get("/:id", async (req, res) => {
    try {
      let newCategory = await Home.findById(req.params.id);
      res.json(newCategory);
    } catch (err) {
      console.log(err);
    }
  });
  
  module.exports = router;