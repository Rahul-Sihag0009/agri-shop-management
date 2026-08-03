const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getShop,
  updateShop,
  uploadLogo,
} = require("../controllers/shopController");

const upload = require("../middleware/upload");

// Get Shop
router.get(
  "/",
  protect,
  getShop
);

// Update Shop
router.put(
  "/",
  protect,
  updateShop
);

// Upload Logo
router.post(
  "/logo",
  protect,
  upload.single("logo"),
  uploadLogo
);

module.exports = router;