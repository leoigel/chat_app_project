const express = require("express");
const router = express.Router();

const userController = require('../controllers/userController');
const {rulesUpdate} = require('../validators/auth/rulesUpdate');
const {validate} = require('../validators/index');
const upload = require('../middleware/fileUpload')
const protect = require('../middleware/auth/protect')
router.post('/update',upload.single('avatar'),protect,userController.update)

// rulesUpdate,validate,

module.exports = router;