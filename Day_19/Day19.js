// 19. Problem: Mongoose Validation

// Problem Statement: Enhance the user schema from the
// previous question to include validation for the
// "email" property(must be a valid email address).
// Implement a function to add a new user to the MongoDB
// database with validation.

// Solution:

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: {
            validator: function (v) {
                return /\S+@\S+\.\S+/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    pass: {
        type: String,
        required: true
    }
});
const User = mongoose.model('User', userSchema);
/**
 * Adds a new user to the MongoDB database with validation
 * @param {Object} user - User object with properties username and email
 */
function addUserWithValidation(user) {
    // Your implementation here
    const newUser = new User(user);
    newUser.save()
        .then(() => console.log('User added successfully!'))
        .catch(err => console.error(err.message));
}
addUserWithValidation({ username: 'john_doe', email: 'invalid-email', pass: 'password' });
addUserWithValidation({ username: 'john_doe', email: 'john_doe@gmail.com', pass: 'password' });

// Expected Output:

// 1. If the user is successfully added, log a success message.
// If validation fails, log an error message.

// Test Cases:

// 2. Call addUserWithValidation({ username: 'john_doe', email:'invalid-email' })
// and check the server logs for a validation error message.

// Hint:

// Define a Mongoose schema for the user with validation rules
// for the "email" property. Use the validate option to specify
// a custom validator function for the email format.

// Create a Mongoose model using the schema.

// Write a function addUserWithValidation that takes a user
// object, creates a new user instance using the Mongoose model,
// and attempts to save it to the database. Handle the validation
// errors and success cases appropriately.

// Hints:

// Use the mongoose.Schema constructor to define the schema with
// validation rules. Use the validate option to specify a custom
// validator function for the "email" property.

// Use the mongoose.model method to create a model from the schema.

// In the addUserWithValidation function, create a new user instance
// using the model constructor and the provided user object.

// Use the save method on the user instance to save it to the database.
// Use a callback function to handle the result of the save operation.
// If there is an error, log the error message. If the user is saved
// successfully, log a success message.