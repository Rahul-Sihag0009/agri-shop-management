const express = require("express");

const router = express.Router();

const {
  createPurchase,
} = require("../controllers/purchaseController");

const protect = require("../middleware/authMiddleware");

router.post("/", protect, createPurchase);

module.exports = router;