// app.js
const express = require('express');
const connectToMongoDB = require('./db');

const app = express();

// Connect to MongoDB
connectToMongoDB();

// Define routes and middleware here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
