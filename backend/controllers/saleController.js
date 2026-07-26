const saleService = require("../services/saleService");

const createSale = async (req, res, next) => {
  try {

    const sale = await saleService.createSale(req.body);

    res.status(201).json({
      success: true,
      message: "Invoice Generated Successfully",
      sale,
    });

  } catch (err) {
    next(err);
  }
};
 const getSaleById = async (req, res, next) => {
  try {
    const sale = await saleService.getSaleById(req.params.id);

    res.json(sale);

  } catch (err) {
    next(err);
  }
};

module.exports = {
  createSale,
  getSaleById,
};