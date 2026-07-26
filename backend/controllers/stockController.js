const stockService = require("../services/stockService");

const addStock = async (req, res, next) => {
  try {
    const product = await stockService.addStock(req.body);

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