const { Item } = require('../../../models')
const { assert } = require('./schema')


const update = async (req, res) => {
    const itemsDetails = req.body
    const itemId = req.params.itemId

    if (!itemId) {
        res.status(400).send()
        return
    }

    try {
        assert(itemsDetails)
    } catch (e) {
        res.status(400).send(e)
    }

    await Item.findByIdAndUpdate(itemId, itemsDetails)
    res.status(200).send()
}

module.exports = {
    update
}
