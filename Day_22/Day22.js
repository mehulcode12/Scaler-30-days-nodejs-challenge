/* Importing mongoose */
const express = require("express");
const mongoose = require("mongoose");

/* Importing actions */
const createProduct = require("./actions/createProduct");
const getAllProducts = require("./actions/getAllProducts");
const updateProduct = require("./actions/updateProduct");
const deleteProduct = require("./actions/deleteProduct");

/* Initializing Expresss */
const app = express();
app.use(express.json());

/* Connecting to mongodb  */
const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/scaler")
    .then((e) => console.log("Succesfully connected to mongoDB."))
    .catch(console.error);
};

connectDB();

// Creating Products
app.post("/product/add", createProduct);

// Getting products
app.get("/products", getAllProducts);

// Updating products
app.put("/product/:id", updateProduct);

// Deleting Products
app.delete("/product/:id", deleteProduct);

/* Listening the server */
app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});