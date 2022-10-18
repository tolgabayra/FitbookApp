const Joi = require("joi")

const createValidation = Joi.object({
    username: Joi.string().required().min(3),
    email: Joi.string().email().required().min(8),
    password: Joi.string().required().min(5)
})

const loginValidation = Joi.object({
    password: Joi.string().min(8),
    email: Joi.string().email().required().min(8)
})

module.exports = {
    createValidation,
    loginValidation
}