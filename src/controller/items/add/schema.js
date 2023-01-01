const Joi = require('joi')

// TODO replace the currency with constant values
const schema = Joi.object({
    description: Joi.string().required(),
    title: Joi.string().required(),
    price: Joi.number().required(),
    images: Joi.array().items(Joi.string().required()).required(),
    currency: Joi.string().valid('SEK', 'DEK', 'EUR').required()
})


const assert = (value) =>
    Joi.assert(value, schema)

module.exports = {
    assert
}