const express = require('express')
const multer = require('multer')
const path = require('path')
const router = express.Router()


const {
    getAllCategories,
    addCategory,
    updateCategory,
    deleteCategory
} = require('../../controllers/adminControllers/homePageControllers')



//multer config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    //   cb(null, "src/storage/media");
    cb(null, "../../images");
    },
  
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  const fileFilter = (req, file, cb) => {
    if (!file) {
      cb(null, false);
    } else {
      cb(null, true);
    }
  };
  const upload = multer({
    storage: storage,
    limits: { fieldSize: 10 * 1024 * 1024 },
    fileFilter: fileFilter,
  });

// CHAINING THE ROUTES
router.route('/').get(getAllCategories)
router.route("/", upload.single("image")).post(addCategory)
router.route('/:id').put(updateCategory).delete(deleteCategory)


module.exports = router