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

router.post(
  "/",
  validateRequest(productSchema),
  addProduct
);

router.get("/", getProducts);

router.get("/:id", getProduct);

router.put(
  "/:id",
  validateRequest(productSchema),
  updateProduct
);

router.delete("/:id", deleteProduct);

module.exports = router;