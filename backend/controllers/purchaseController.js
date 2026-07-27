const purchaseService = require("../services/purchaseService");

const createPurchase = async (req, res, next) => {

  try {

    const purchase =
      await purchaseService.createPurchase(req.body);

    res.status(201).json({
      success: true,
      message: "Purchase created successfully",
      purchase,
    });

  } catch (err) {
    next(err);
  }

};

module.exports = {
  createPurchase,
};