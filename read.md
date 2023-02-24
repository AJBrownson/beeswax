 const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
 app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  const meta = req.body;
   const collection = mongoose.createConnection(db, { useNewUrlParser: true });
  const Files = new mongoose.model('Files', filesSchema);
   const newFile = new Files({
    file_name: file.originalname,
    data: file.buffer,
    mimetype: file.mimetype,
    meta,
  });
   newFile.save((err, file) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.status(200).send(file);
  });
});