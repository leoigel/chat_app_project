const multer = require('multer');
const path = require('path')
 const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(`${process.cwd()}/backend/uploads`))
    },
    filename: function (req, file, cb) {
      fileExtension = file.originalname.split('.')[1]
      cb(null, file.fieldname + '-' + Date.now()+'.'+fileExtension)
    }
  })
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb("Type file is not access", false);
    }
};
module.exports = multer({
    storage,
    fileFilter
})


