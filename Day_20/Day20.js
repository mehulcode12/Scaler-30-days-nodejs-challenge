// 20. Problem: Express Route with MongoDB Aggregation

// Problem Statement: Create an Express route that uses MongoDB
// aggregation to calculate and return the average age of all
// users in the database.

// Solution:

const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

function addUser(user) {
    const newUser = new User(user);
    newUser.save()
        .then(() => console.log('User added successfully!'))
        .catch(err => console.error(err.message));
}

addUser({ name: 'John Doe', age: 25 });
addUser({ name: 'Jane Doe', age: 30 });
addUser({ name: 'John Smith', age: 35 });

/**
 * Express route to calculate the average age of all users in MongoDB
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function averageAgeOfUsers(req, res) {
    // Your implementation here
    const pipeline = [
        {
            $group: {
                _id: null,
                averageAge: { $avg: "$age" }
            }
        }
    ];
    User.aggregate(pipeline)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
}

app.get('/average-age', averageAgeOfUsers);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Expected Output:

// 1. Return a JSON response with the calculated average age.

// Test Cases:

// 1. Access the route /average-age and check if the response contains
// the expected average age.