const { Item } = require('../../models')
const { convert } = require('../../utils')

const parseIntWithFallback = (value, fallbackValue) =>
    parseInt(value, 10) || fallbackValue


const getItemWithConvertedCurrency = (requestedCurrency) => (item) => {
    if (requestedCurrency === item.currency) {
        return item
    }

    return {
        ...item.toJSON(),
        ...convert({ value: item.price, currency: item.currency })(requestedCurrency),
    }
}

const fetch = async (req, res) => {
    const page = parseIntWithFallback(req.query.page, 0)
    const pageLimit = parseIntWithFallback(req.query.limit, 10)
    const requestedCurrency = req.query.currency || 'SEK'

    const items = await Item.find().skip(page * pageLimit).limit(pageLimit)
    const itemWithConvertedCurrency = items.map(getItemWithConvertedCurrency(requestedCurrency))
    res.status(200).send(itemWithConvertedCurrency)
}

module.exports = {
    fetch
}
