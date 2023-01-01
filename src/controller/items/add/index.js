const { Item } = require('../../../models')
const { assert } = require('./schema')


const add = async (req, res) => {
    const itemsDetails = req.body

    try {
        await assert(itemsDetails)
    } catch (e) {
        res.status(400).send(e)
        return
    }

    const newItem = new Item(itemsDetails)
    await newItem.save()
    res.status(200).send()
}

module.exports = {
    add
}
