const Joi = require('joi')

// TODO replace the currency with constant values
const schema = Joi.object({
    price: Joi.number().required(),
})


const assert = (value) =>
    Joi.assert(value, schema)

module.exports = {
    assert
}