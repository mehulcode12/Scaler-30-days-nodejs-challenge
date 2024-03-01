
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the Product schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});


const Product = mongoose.model('Product', productSchema);
function getProductStatistics() {
  return Product.aggregate([
    {
      $group: {
        _id: null,
        totalProducts: { $sum: 1 },
        averagePrice: { $avg: '$price' },
        highestQuantity: { $max: '$quantity' },
      },
    },
  ]);
}


getProductStatistics().then((result) => {
  console.log('Product Statistics:', result);
  
  // Close the MongoDB connection after executing the pipeline
  mongoose.connection.close();
}).catch((err) => {
  console.error('Error executing pipeline:', err);


  mongoose.connection.close();
});
