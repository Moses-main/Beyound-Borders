// middleware/authenticate.js

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Middleware function to authenticate JWT token
function authenticate(req, res, next) {
  // Get token from request headers
  const token = req.headers.authorization;

  // Verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      // Token verification failed
      return res.status(401).json({ message: "Unauthorized" });
    }
    // Token verification succeeded
    req.user = decoded.user; // Set user data in request object
    next(); // Continue to next middleware or route handler
  });
}

module.exports = authenticate;
