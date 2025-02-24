const { fetch } = require('../controller/items/fetch')
const { add } = require('../controller/items/add')
const { update } = require('../controller/items/update')

const itemsRoutes = (app) => {
    app.post('/item', add)
    app.put('/item/:itemId', update)
    app.get('/item', fetch)
}

module.exports = {
    itemsRoutes
}
