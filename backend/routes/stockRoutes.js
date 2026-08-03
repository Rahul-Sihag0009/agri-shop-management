const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminOnly");

const {
  addStock,
} = require("../controllers/stockController");

router.post(
  "/add",
  protect,
  adminOnly,
  addStock
);

module.exports = router;