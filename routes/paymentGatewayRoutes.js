// routes/paymentGatewayRoutes.js

const express = require("express");
const router = express.Router();
const paymentGatewayController = require("../controllers/paymentGatewayController");

router.post("/process-payment", paymentGatewayController.processPayment);

module.exports = router;
