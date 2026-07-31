const express = require("express");

const validateRequest = require("../middleware/validateRequest");
const productSchema = require("../validators/productValidator");

const router = express.Router();

const {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminOnly");

router.post(
  "/",
  protect,
  adminOnly,
  validateRequest(productSchema),
  addProduct
);

router.get("/", protect, getProducts);

router.get("/:id", protect, getProduct);

router.put(
  "/:id",
  protect,
  adminOnly,
  validateRequest(productSchema),
  updateProduct
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteProduct
);

module.exports = router;