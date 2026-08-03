const stockService = require("../services/stockService");

// ===========================
// Add Stock
// ===========================
const addStock = async (req, res, next) => {
  try {
    const product = await stockService.addStock(
      req.user.shopId,
      req.body
    );

    res.json({
      success: true,
      message: "Stock Added Successfully",
      product,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addStock,
};