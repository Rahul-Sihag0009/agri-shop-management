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

router.post(
  "/",
  validateRequest(productSchema),
  addProduct
);

router.get("/", protect, getProducts);

router.get("/:id", protect, getProduct);

router.put(
  "/:id",
  validateRequest(productSchema),
  updateProduct
);

router.delete("/:id", protect, deleteProduct);

module.exports = router;