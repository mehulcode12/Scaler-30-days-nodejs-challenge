// Problem: Express Error Handling

// Problem Statement: Create an Express route that throws an error if the request parameter "number" is not a positive integer. Implement an error handling middleware to catch and handle this specific error, returning a custom error message and a 400 Bad Request status.

const express = require('express');
const app = express();

/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function positiveIntegerHandler(req, res, next) {
    const number = parseInt(req.query.number);

    if (Number.isInteger(number) && number > 0) {
        console.log(`Success: ${number} is a positive integer.`);
    } else {
        console.log(`Error: ${number} is a negative  integer. Number must be a positive integer.`);
        const err = new Error(`${number} must be a positive integer.`);
        err.status = 400;
        next(err);
    }
}

function errorHandler(err, req, res, next) {
    if (err.status === 400) {
        res.status(400).send('Error: ' + err.message);
    } else {
        next(err);
    }
}

app.get('/positive', positiveIntegerHandler);

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});