const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController')
const {rulesRegister} = require('../validators/auth/rulesRegister')
const {rulesLogin} = require('../validators/auth/rulesLogin')
const {validate} = require('../validators/index')
router.post('/login',rulesLogin,validate,authController.login)
router.post('/register',rulesRegister,validate,authController.register)



module.exports = router;