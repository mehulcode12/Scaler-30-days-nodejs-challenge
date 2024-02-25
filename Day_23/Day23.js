const mongoose = require('mongoose');

// Define Category Schema
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  // Other category fields...
});

// Define Product Schema with reference to Category
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Other product fields...
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

// Create Category and Product Models
const Category = mongoose.model('Category', categorySchema);
const Product = mongoose.model('Product', productSchema);

// Function to retrieve products with populated category details
async function getProductsPopulatedWithCategory() {
  try {
    // Use populate() to fetch category details along with products
    const products = await Product.find().populate('category');
    return products;
  } catch (error) {
    console.error(error);
    return []; // Return empty array on error
  }
}

// Example usage
getProductsPopulatedWithCategory()
  .then(products => {
    console.log(products);
  })
  .catch(error => {
    console.error(error);
  });

// Connect to MongoDB (replace with your connection string)
mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error(error));
