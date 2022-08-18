const { check } = require('express-validator');

let friendValidator = [
    check('name', ' Name is required').notEmpty(),
    check('surname', 'Surname  is required').notEmpty()
]

module.exports = {friendValidator};
