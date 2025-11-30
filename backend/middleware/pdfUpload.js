const multer = require("multer");

const storage = multer.memoryStorage();

const upload = multer({
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "application/pdf") {
      cb(new Error("Only PDF files allowed"), false);
    }
    cb(null, true);
  },
});

module.exports = upload;
