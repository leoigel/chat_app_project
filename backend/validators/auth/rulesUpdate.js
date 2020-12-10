const { body } = require('express-validator');

exports.rulesUpdate = (() => {
    return [
        body('firstName').notEmpty(),
        body('lastName').notEmpty(),
        body('gender').notEmpty(),
        body('email').isEmail(),
        body('password').optional().isLength({min:5}),
    ]
})()