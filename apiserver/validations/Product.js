const Joi = require("joi")

const createValidation = Joi.object({
    title: Joi.string().required().min(3),
    desc: Joi.string().min(20).max(60).required(),
    categories: Joi.array(),
    size : Joi.string(),
    color: Joi.string().min(3).max(16),
    price: Joi.number().required()
    
})

module.exports = {
    createValidation
}