const { body } = require('express-validator');

exports.rulesLogin = (() => {
    return [
        body('email').isEmail(),
        body('password').isLength({min:5}),
    ]
})()