const dashboardService = require("../services/dashboardService");

// ================= Dashboard Stats =================
const getDashboardStats = async (req, res, next) => {
  try {
    const stats = await dashboardService.getDashboardStats(
      req.user.shopId
    );

    res.json(stats);
  } catch (err) {
    next(err);
  }
};

// ================= Recent Sales =================
const getRecentSales = async (req, res, next) => {
  try {
    const sales = await dashboardService.getRecentSales(
      req.user.shopId
    );

    res.json(sales);
  } catch (err) {
    next(err);
  }
};

// ================= Low Stock =================
const getLowStockProducts = async (req, res, next) => {
  try {
    const products = await dashboardService.getLowStockProducts(
      req.user.shopId
    );

    res.json(products);
  } catch (err) {
    next(err);
  }
};

// ================= Top Selling =================
const getTopSellingProducts = async (req, res, next) => {
    
  try {
    const products = await dashboardService.getTopSellingProducts(
      req.user.shopId
    );

    res.json(products);

  } catch (err) {

    next(err);

  }

};

// ================= Monthly Sales =================
const getMonthlySales = async (req, res, next) => {
  try {
    const data = await dashboardService.getMonthlySales(
      req.user.shopId
    );

    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getDashboardStats,
  getRecentSales,
  getLowStockProducts,
  getTopSellingProducts,
  getMonthlySales,
};