// routes/updateRoutes.js

const express = require("express");
const router = express.Router();
const updateController = require("../controllers/updateController");

router.get("/check-updates", updateController.checkUpdates);

module.exports = router;
