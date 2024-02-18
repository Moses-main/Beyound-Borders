// controllers/legalController.js

const express = require("express");
const router = express.Router();

// Route: /legal/privacy-policy
router.get("/privacy-policy", (req, res) => {
  // Logic for privacy policy
});

// Route: /legal/terms-of-service
router.get("/terms-of-service", (req, res) => {
  // Logic for terms of service
});

module.exports = router;
