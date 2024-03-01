// Import necessary modules
const express = require('express');
const app = express();

function errorHandler(err, req, res, next) {
  console.error(err.stack);
 
  if (err instanceof CustomError) {
    // Handle custom errors with specific responses
    return res.status(err.statusCode).json({ error: err.message });
  } else {

    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
 
app.use(errorHandler);
 
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
this.name = this.constructor.name;
    this.statusCode = statusCode || 500;
    Error.captureStackTrace(this, this.constructor);
  }
}

app.get('/example', (req, res, next) => {
  // Simulate an error
  const err = new CustomError('Custom Error Message', 400);
  next(err);
});
