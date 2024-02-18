// routes/legalRoutes.js

const express = require("express");
const router = express.Router();
const legalController = require("../controllers/legalController");

router.get("/privacy-policy", legalController.privacyPolicy);
router.get("/terms-of-service", legalController.termsOfService);

module.exports = router;
