const shopService = require("../services/shopService");

// ===========================
// Get Shop
// ===========================
const getShop = async (req, res, next) => {
  try {
    const shop = await shopService.getShop(req.user.shopId);

    res.json(shop);
  } catch (err) {
    next(err);
  }
};

// ===========================
// Update Shop
// ===========================
const updateShop = async (req, res, next) => {
  try {
    const shop = await shopService.updateShop(
      req.user.shopId,
      req.body
    );

    res.json(shop);
  } catch (err) {
    next(err);
  }
};

// ===========================
// Upload Logo
// ===========================
const uploadLogo = async (req, res, next) => {
  try {
    
    if (!req.file) {
      return res.status(400).json({
        message: "No logo uploaded",
      });
    }

    const logoPath = `/uploads/${req.file.filename}`;

    const shop = await shopService.uploadLogo(
      req.user.shopId,
      logoPath
    );

    res.json(shop);

  } catch (err) {
    next(err);
  }
};

module.exports = {
  getShop,
  updateShop,
  uploadLogo,
};