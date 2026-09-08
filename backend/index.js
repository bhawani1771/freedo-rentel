const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Models Import
const User = require('./models/user');
const Product = require('./models/product');
const Review = require('./models/review');
const Order = require('./models/order');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Atlas Cloud Database Connected Successfully! 🍃'))
  .catch((err) => console.error('❌ Database Connection Error:', err.message));

// Test Route
app.get('/', (req, res) => {
  res.send('Backend Server connected to MongoDB Atlas! 🚀');
});

// ==========================================
// 1. USERS API (GET, POST, PUT, DELETE)
// ==========================================

// GET ALL USERS
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET SINGLE USER BY ID
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE NEW USER (POST)
app.post('/api/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ message: 'User created successfully', data: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// EDIT/UPDATE USER (PUT)
app.put('/api/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User updated successfully', data: updatedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE USER
app.delete('/api/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==========================================
// 2. PRODUCTS API (GET, POST, PUT, DELETE)
// ==========================================

// GET ALL PRODUCTS
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET SINGLE PRODUCT BY ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE NEW PRODUCT (POST)
app.post('/api/products', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({ message: 'Product added successfully', data: newProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// EDIT/UPDATE PRODUCT (PUT)
app.put('/api/products/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product updated successfully', data: updatedProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE PRODUCT
app.delete('/api/products/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==========================================
// 3. REVIEWS API (GET & POST)
// ==========================================
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/reviews', async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json({ message: 'Review added successfully', data: newReview });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ==========================================
// 4. ORDERS API (GET & POST)
// ==========================================
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json({ message: 'Order placed successfully', data: newOrder });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});