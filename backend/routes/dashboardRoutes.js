const express=require("express");

const router=express.Router();

const {
  getDashboardStats,
  getRecentSales,
  getLowStockProducts,
  getTopSellingProducts,
  getMonthlySales
} = require("../controllers/dashboardController");

router.get("/",getDashboardStats);
router.get("/recent-sales",getRecentSales);
router.get("/low-stock",getLowStockProducts);
router.get("/top-products", getTopSellingProducts);
router.get("/monthly-sales", getMonthlySales);

module.exports=router;