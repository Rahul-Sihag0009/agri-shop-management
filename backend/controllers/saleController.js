const saleService = require("../services/saleService");

// ===========================
// Create Sale
// ===========================
const createSale = async (req, res, next) => {
  try {
    const sale = await saleService.createSale(
      req.user.shopId,
      req.body
    );

    res.status(201).json({
      success: true,
      message: "Invoice Generated Successfully",
      sale,
    });

  } catch (err) {
    next(err);
  }
};

// ===========================
// Get Sale By ID
// ===========================
const getSaleById = async (req, res, next) => {
  try {
    const sale = await saleService.getSaleById(
      req.user.shopId,
      req.params.id
    );

    if (!sale) {
      return res.status(404).json({
        success: false,
        message: "Invoice not found",
      });
    }

    res.json(sale);
    
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createSale,
  getSaleById,
};