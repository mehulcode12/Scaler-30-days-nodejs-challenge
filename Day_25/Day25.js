const mongoose = require('mongoose');

// Define Product Schema (replace with your actual schema)
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Other product fields...
});

// Create Product Model
const Product = mongoose.model('Product', productSchema);

// Connect to MongoDB 
mongoose.connect('mongodb://localhost:27017/db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error(error));

// Function to create index on "name" field
function createProductNameIndex() {
  Product.createIndex({ name: 1 }, (err) => {
    if (err) {
      console.error('Error creating index:', err);
    } else {
      console.log('Index created successfully!');
    }
  });
}

// Example usage
createProductNameIndex();
