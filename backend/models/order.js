const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  // Address Details
  flat: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  pin: {
    type: String,
    required: true
  },
  // Ordered Products Details
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      title: String,
      price: Number,
      quantity: {
        type: Number,
        default: 1
      },
      image: String
    }
  ],
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: 'Pending' // Pending, Shipped, Delivered
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);