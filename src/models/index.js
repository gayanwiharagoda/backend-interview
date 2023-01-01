const { model, Schema } = require('mongoose')

const itemSchema = new Schema({
  description: String,
  images: [String],
  price: Number,
  currency: String,
  title: String
})


module.exports = {
  Item: model('Item', itemSchema)
}