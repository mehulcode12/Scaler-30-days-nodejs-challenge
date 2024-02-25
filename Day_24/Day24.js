const express = require('express');
const mongoose = require('mongoose');

// Define Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  // Other product fields...
});

// Create Product Model
const Product = mongoose.model('Product', productSchema);

// Connect to MongoDB (replace with your connection string)
mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error(error));

// Create Express app
const app = express();

// Middleware to parse JSON body data
app.use(express.json());

// Create Product Route (POST)
function createProductRoute(req, res) {
  const newProduct = new Product(req.body);
  newProduct.save()
    .then(product => res.status(201).json(product))
    .catch(error => res.status(400).json({ error }));
}

app.post('/products', createProductRoute);

// Get All Products Route (GET)
function getAllProductsRoute(req, res) {
  Product.find()
    .then(products => res.json(products))
    .catch(error => res.status(500).json({ error }));
}

app.get('/products', getAllProductsRoute);

// Update Product Route (PUT)
function updateProductRoute(req, res) {
  const { productId } = req.params;

  Product.findByIdAndUpdate(productId, req.body, { new: true })
    .then(product => {
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    })
    .catch(error => res.status(400).json({ error }));
}

app.put('/products/:productId', updateProductRoute);

// Delete Product Route (DELETE)
function deleteProductRoute(req, res) {
  const { productId } = req.params;

  Product.findByIdAndDelete(productId)
    .then(product => {
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json({ message: 'Product deleted' });
    })
    .catch(error => res.status(500).json({ error }));
}

app.delete('/products/:productId', deleteProductRoute);

// Start the server
app.listen(3000, () => console.log('Server listening on port 3000'));
