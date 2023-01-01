const { add } = require('../controller/items/add')

const itemsRoutes = (app) => {
    app.post('/item', add)
}

module.exports = {
    itemsRoutes
}
