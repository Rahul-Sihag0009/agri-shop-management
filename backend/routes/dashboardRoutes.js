const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getDashboardStats,
  getRecentSales,
  getLowStockProducts,
  getTopSellingProducts,
  getMonthlySales,
} = require("../controllers/dashboardController");

// Dashboard Stats
router.get("/", protect, getDashboardStats);

// Recent Sales
router.get("/recent-sales", protect, getRecentSales);

// Low Stock Products
router.get("/low-stock", protect, getLowStockProducts);

// Top Selling Products
router.get("/top-products", protect, getTopSellingProducts);

// Monthly Sales
router.get("/monthly-sales", protect, getMonthlySales);

module.exports = router;