/* Importing the express & path module */
const express = require("express");
const jwt = require("jsonwebtoken");

/* Initializing express */
const app = express();

/* Defining the port */
const port = 8080;
const secrectKey = "scaler-task";

/* Function for authentication */
function authenticationMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized - Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, secrectKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized - Invalid Token" });
  }
}

app.get("/login", (req, res) => {
  const user = {
    username: "Mangesh",
    password: "Mangesh123",
  };
  const token = jwt.sign(user, secrectKey, { expiresIn: '300s'});
  res.json({ token });
});

app.use(authenticationMiddleware)

app.get("/protected", (req, res) => {
  res.json({ message: "Access granted", user: req.user });
});

/* Listening on port */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/**
 * Authentication middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */