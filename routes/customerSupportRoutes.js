const express = require("express");
const router = express.Router();

// Route: /customer-support/in-app-chat
router.post("/in-app-chat", (req, res) => {
  // Logic for in-app chat support
});

// Route: /customer-support/faqs
router.get("/faqs", (req, res) => {
  // Logic for FAQs section
});

module.exports = router;
