const shopService = require("../services/shopService");

const getShop = async (req, res, next) => {
  try {
    const shop = await shopService.getShop();
    res.json(shop);
  } catch (err) {
    next(err);
  }
};

const updateShop = async (req, res, next) => {
  try {
    const shop = await shopService.updateShop(req.body);
    res.json(shop);
  } catch (err) {
    next(err);
  }
};


const uploadLogo = async (req, res, next) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        message: "No logo uploaded",
      });
    }

    const logoPath = `/uploads/${req.file.filename}`;

    const shop = await shopService.uploadLogo(logoPath);

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