// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticate = require("../middleware/authenticate");

// Create
router.post("/", authenticate, userController.createUser);

// Read
router.get("/:userId", authenticate, userController.getUserById);

// Update
router.put("/:userId", authenticate, userController.updateUser);

// Delete
router.delete("/:userId", authenticate, userController.deleteUser);

module.exports = router;
