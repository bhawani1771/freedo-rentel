const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  modelName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  mrp: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    default: 0
  },
  image: {
    type: String // Yahan Image URL ya path aayega
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);