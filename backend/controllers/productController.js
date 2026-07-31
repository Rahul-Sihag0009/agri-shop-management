const productService = require("../services/productService");

// ===========================
// Add Product
// ===========================

const addProduct = async (req, res, next) => {
  try {
    const product = await productService.createProduct(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  } catch (err) {
    next(err);
  }
};

// ===========================
// Get Products
// ===========================

const getProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts(
      req.query.search || ""
    );

    res.json({
      success: true,
      products,
    });
  } catch (err) {
    next(err);
  }
};

// ===========================
// Get Single Product
// ===========================

const getProduct = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      product,
    });
  } catch (err) {
    next(err);
  }
};
// ===========================
// Update Product
// ===========================

const updateProduct = async (req, res, next) => {
  try {
    const product = await productService.updateProduct(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      product,
    });
  } catch (err) {
    next(err);
  }
};

// ===========================
// Delete Product
// ===========================

const deleteProduct = async (req, res, next) => {
  try {
    await productService.deleteProduct(req.params.id);

    res.json({
      success: true,
      message: "Product Deleted Successfully",
    });
  } catch (err) {
    if (
      err.message &&
      err.message.includes("SaleItem_productId_fkey")
    ) {
      return res.status(400).json({
        success: false,
        message:
          "This product cannot be deleted because it has already been used in one or more invoices.",
      });
    }

    next(err);
  }
};

module.exports = {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};