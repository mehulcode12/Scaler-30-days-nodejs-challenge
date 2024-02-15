const express = require('express');
const app = express();

// Logging middleware
function loggingMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const headers = req.headers;
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString(); // Convert Buffer to string
  });

  req.on('end', () => {
    console.log(`[${timestamp}] ${method} ${url}`);
    console.log('Headers:', headers);
    console.log('Body:', body);
    next();
  });
}

// Use logging middleware for all routes
app.use(loggingMiddleware);

// Example route
app.get('/example', (req, res) => {
  res.send('This is an example response.');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
