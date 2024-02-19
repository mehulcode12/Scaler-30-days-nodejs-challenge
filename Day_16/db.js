// db.js
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/mydatabase';

function connectToMongoDB() {
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;

  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });

  db.once('open', () => {
    console.log('MongoDB connected successfully');
  });
}

module.exports = connectToMongoDB;
