const express = require("express");
const router = express.Router();
const customerSupportRoutes = require("../routes/customerSupportRoutes");
const paymentGatewayRoutes = require("../routes/paymentGatewayRoutes");
const feedbackRoutes = require("../routes/feedbackRoutes");
const legalRoutes = require("../routes/legalRoutes");
const updateRoutes = require("../routes/updateRoutes");
// const securityRoutes = require("../routes/securityRoutes");

router.use("/customer-support", customerSupportRoutes);
router.use("/payment-gateway", paymentGatewayRoutes);
router.use("/feedback", feedbackRoutes);
router.use("/legal", legalRoutes);
router.use("/update", updateRoutes);
router.use("/security", securityRoutes);

module.exports = router;
